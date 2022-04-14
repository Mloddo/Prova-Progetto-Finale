import Pizza from "../Model/";

export const getPizzas = async (req, res) => {
    try {
        const pizza = await Pizza.findAll();
        res.send(pizza);
    } catch (err) {
        console.log(err);
    }
}

export const getPizzaById = async (req, res) => {
    try {
        const pizza = await Pizza.findOne({
            where: {
                id: req.params.id
            }
        });
        
        if (pizza) {
            res.send(pizza);
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export const createPizza = async (req, res) => {
    try {
        await Pizza.create(req.body);
        res.json({
            "message": "Pizza Created"
        });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export const updatePizza = async (req, res) => {
    try {
        await Pizza.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Pizza Updated"
        });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export const deletePizza = async (req, res) => {
    try {
        await Pizza.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Pizza Deleted"
        });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}