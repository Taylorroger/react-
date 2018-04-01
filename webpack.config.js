var path=require('path');

module.exports={
    entry:'./components/Index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    devtool:'source-map',
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    {loader:"style-loader"},
                    {loader:"css-loader"}
                ]
            },
            {
                test:/\.js$/,
                exclude:/(node_moudles|bower_components)/,
                use:{
                    loader:'babel-loader',
                }
            },
            {
                test:/\.scss$/,
                use:[
                    {loader:"style-loader"},
                    {loader:"css-loader"},
                    {loader:"sass-loader"}
                ]
            },
            {
                test:/\.(png|jpg|gif)$/,
                use:{loader:"file-loader"}
            }
        ]
    }
}