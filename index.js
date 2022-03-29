module.exports = async function (waw) {
	const stripe = require('stripe')(waw.config.stripe);
	const router = waw.router("/api/stripe")
	router.post("/source", (req, res) => {
		stripe.charges.create({
			amount: req.body.amount,
			currency: 'usd',
			source: req.body.source.id,
			description: 'My First Test Charge (created for API docs)',
		});
		res.json(true);
	})
};