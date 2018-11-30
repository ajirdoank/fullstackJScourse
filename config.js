/* eslint-disable no-console */
// console.log('config')
const env = process.env;
export const nodeEnv = env.NODE_ENV || 'development';

/* default port for express server */
export default{
    port : env.port || 666
};

// export const logstars = function(message){
// console.info('*****');
// };