module.exports = async function (waw) {
	const stripe = require('stripe')(waw.config.stripe);
	const router = waw.router("/api/stripe");
	router.post("/charge", async (req, res) => {
		const change = await stripe.charges.create({
			amount: req.body.amount,
			currency: 'usd',
			source: req.body.source.id,
			description: 'My First Test Charge (created for API docs)',
		});
		res.json(change.paid);
	});
	router.post("/subscribe", async (req, res) => {
		const change = await stripe.charges.create({
			amount: req.body.amount,
			currency: 'usd',
			source: req.body.source.id,
			description: 'My First Test Charge (created for API docs)',
		});
		res.json(change.paid);
	});
};