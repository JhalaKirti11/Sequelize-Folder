import Category from "../model/category.model.js"

export const addBulkCategory = (req, res, next) => {
    console.log(req.body);
    Category.bulkCreate(req.body).then(result => {
        console.log(result);
        return res.status(201).json({ message: "category data inserted" });
    }).catch(err => {
        console.log(err);
        return res.status(401).json({ error: "category data not inserted!" })
    })
};

export const addCategory = (req, res, next) => {
    Category.create(req.body)
        .then(result => {
            return res.status(201).json({ message: "category added ", result })
        }).catch(err => {
            return res.status(401).json({ error: " not added" });
        });
}

export const viewCategory = async (req, res, next) => {
    try {
        let data = await Category.findAll();
        return res.status(201).json({ message: data });
    } catch (err) {
        return res.status(401).json({ error: " can't fetch the data!" })
    }
}


export const deleteCategory = (req, res, next) => {
    let { name } = req.params;
    Category.destroy({ where: { name } })
        .then(() => {
            return res.status(201).json({ message: "category deleted!" });
        }).catch(err => {
            return res.status(401).json({ error: "not deleted!" });
        });
}

export const editCategory = (req, res, next) => {
    let { name } = req.params;
    let { slug } = req.body;
    Category.update({ slug }, { where: { name } })
        .then(result => {
            return res.status(201).json({ message: result });
        }).catch(err => {
            return res.status(201).json({ error: err });
        });
}
