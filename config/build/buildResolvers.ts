import type webpack from 'webpack'
import { type BuildPaths } from './types/config'

export const buildResolvers = (paths: BuildPaths): webpack.ResolveOptions => {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [paths.src, paths.nodeModules],
        mainFiles: ['index'],
        alias: {}
    }
}
