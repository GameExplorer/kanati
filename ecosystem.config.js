module.exports = {
    apps: [{
        name: 'Kanati',
        exec_mode: 'cluster',
        instances: 'max', // Or a number of instances
        script: './node_modules/svelte/index.mjs',
        args: 'start',
        env: {
            NODE_ENV: "production",
            PORT: 42000,
        },
    }]
}