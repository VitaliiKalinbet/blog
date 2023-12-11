import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    // порядок лоадерів в масиві має важливе значення
    // для цього виносомо окремі лоадери в змінні вище щоб тут зручно бачити порядок лоадерів
    return [
        typescriptLoader,
    ];
}
