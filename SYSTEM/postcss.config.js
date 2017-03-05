module.exports = {
  plugins: [
  	require('precss'),
    require('autoprefixer')({browsers:'ios >= 8'})
  ]
}