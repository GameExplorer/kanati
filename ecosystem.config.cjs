module.exports = {
    apps: [{
        name: 'Kanati',
        exec_mode: 'cluster',
        instances: 'max', // Or a number of instances
        script: './build/index.js',
        args: 'start',
        env: {
            NODE_ENV: "production",
            PORT: 42000,
        },
    }]
}
