import { type BuildOptions } from './types/config'
import { buildDevServer } from './buildDevServer'
import type webpack from 'webpack'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolvers } from './buildResolvers'
export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
    const {
        mode,
        isDev,
        port,
        paths
    } = options

    return {
        mode,
        entry: paths.entry,
        resolve: buildResolvers(paths),
        plugins: buildPlugins(paths),
        module: {
            rules: buildLoaders(isDev)
        },
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true
        },
        devServer: isDev ? buildDevServer(port) : undefined,
        devtool: isDev ? 'inline-source-map' : undefined
    }
}
