import  express  from 'express'

const router=express.Router()

router.get('/', (_req, res) => {
    res.send('Fetching all entry ordes')

})


router.post('/', (_req, res) => {
    res.send('saving order')

})

export default router

