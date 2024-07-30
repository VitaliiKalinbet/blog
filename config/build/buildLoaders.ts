import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options;

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    // Якщо не використовуємо typescript то потрібен би був babel-loader
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };
    const babelLoader = buildBabelLoader(options);

    // const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });
    // const tsxBabelLoader = buildBabelLoader({ ...options, isTsx: true });

    const cssLoader = buildCssLoader(isDev);

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    // порядок лоадерів в масиві має важливе значення
    // для цього виносомо окремі лоадери в змінні вище щоб тут зручно бачити порядок лоадерів
    return [
        fileLoader,
        svgLoader,
        // codeBabelLoader,
        // tsxBabelLoader,
        babelLoader,
        typescriptLoader,
        cssLoader,
    ];
}
