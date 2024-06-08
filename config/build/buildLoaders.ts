import type webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export const buildLoaders = (isDev: boolean): webpack.RuleSetRule[] => {
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    }

    const htmlLoader = {
        test: /\.html$/,
        use: 'html-loader'
    }

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev
                ? 'style-loader'
                : MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
        ]
    }

    const fileLoader = {
        test: /\.(png|svg|jpg|jpeg|gif|woff|woff2|ttf)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'assets/[name][ext]'
        }
    }

    return [
        typescriptLoader,
        htmlLoader,
        cssLoader,
        fileLoader
    ]
}
