import { type BuildEnv, type BuildPaths } from './config/build/types/config'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import path from 'path'

const paths: BuildPaths = {
    src: path.resolve(__dirname, 'src'),
    entry: path.resolve(__dirname, 'src', 'pages', 'index.ts'),
    build: path.resolve(__dirname, 'public'),
    html: path.resolve(__dirname, 'src', 'index.html'),
    nodeModules: path.resolve(__dirname, 'node_modules')
}

export default (env: BuildEnv) => {
    const mode = env.mode || 'development'

    const isDev = mode === 'development'

    const PORT = env.port || 3000

    const config = buildWebpackConfig({
        port: PORT,
        isDev,
        mode,
        paths
    })

    return config
}
