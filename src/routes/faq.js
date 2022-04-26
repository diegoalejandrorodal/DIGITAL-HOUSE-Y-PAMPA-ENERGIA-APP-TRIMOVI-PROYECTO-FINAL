const router = require('express').Router(),
    controller = require('../controllers/faqController');

router.get('/terminos-y-condiciones', controller.faq);
router.get('/sobre-nosotros', controller.sobreNosotros);
router.get('/privacidad', controller.privacidad);
router.get('/gracias', controller.gracias);
router.get('/contacto', controller.contacto);
router.post('/contacto', controller.mensaje);



module.exports = router;