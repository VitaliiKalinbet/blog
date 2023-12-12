import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
    const cssLoader = {
            test: /\.s[ac]ss$/i,
            use: [
                // Creates `style` nodes from JS strings
                "style-loader",
                // Translates CSS into CommonJS
                "css-loader",
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
