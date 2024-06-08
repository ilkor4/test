export type BuildMode = 'development' | 'production'

export interface BuildPaths {
    src: string
    html: string
    entry: string
    build: string
    nodeModules: string
}

export interface BuildEnv {
    port: number
    mode: BuildMode
}

export interface BuildOptions extends BuildEnv {
    paths: BuildPaths
    isDev: boolean
}
