import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {
    const cssLoader = {
            test: /\.s[ac]ss$/i,
            use: [
                isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                // Translates CSS into CommonJS
                {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                            localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
                        },
                    }
                },
                // Compiles Sass to CSS
                "sass-loader",
            ],
        };

    // Якщо не використовуємо typescript то потрібен би був babel-loader
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    // порядок лоадерів в масиві має важливе значення
    // для цього виносомо окремі лоадери в змінні вище щоб тут зручно бачити порядок лоадерів
    return [
        typescriptLoader,
        cssLoader,
    ];
}
