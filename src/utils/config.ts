import 'dotenv/config'
import Joi from 'joi'

const config={
    node_env: process.env.NODE_ENV,
    port: process.env.PORT,
    allowed_origins: process.env.ALLOWED_ORIGINS ? String(process.env.ALLOWED_ORIGINS).split(',') : []
}

const configSchema= Joi.object({
    node_env: Joi.string().required(),
    port: Joi.number().required(),
    allowed_origins: Joi.array().items(Joi.string())
})

const validateSchema=(configObject: typeof config)=>{
    const {error, value} = configSchema.validate(configObject,{abortEarly:false})
    return {error, value}
}

export {
    config,
    validateSchema
}