import product from "../model/product.model.js"

export const addBulkproduct =  (req, res, next) => {
    console.log(req.body);
        // let {id,title,description,category,price,brand,rating} = req.body;
        let insert =  product.bulkCreate(req.body.products);
        insert.then(result=>{
        return res.status(201).json({ message: "product data inserted!" });
        }).catch (err=> {
        return res.status(401).json({ error: err });
    });
}

export const addproduct =  (req, res, next) => {
    // console.log(req.body);
        // let {id,title,description,category,price,brand,rating} = req.body;
    let insert =  product.create(req.body);
        insert.then(result=>{
        return res.status(201).json({ message: result });
        }).catch (err=> {
        return res.status(401).json({ error: err });
    });
}


export const viewAllProduct = (req, res, next) => {
    let allProduct = product.findAll();
    allProduct.then(result => {
        return res.status(200).json({ product: result });
    }).catch(err => {
        return res.status(401).json({ error: err });
    });
}

export const updateProduct = async (req,res, next)=>{
    let {id} = req.params;
    let {name} = req.body;
    try{
        let data = await product.update({name},{where:{id}});
        return res.status(201).json({message:"updated successfully"});
    }
    catch(err){
        return res.status(401).json({error:err});
    }
}

export const deleteProduct = (req, res, net) => {

    let { title } = req.body;
    let data = product.destroy({ where: { title } });
    data.then(() => {
        return res.status(201).json({ message: "product deleted!" });
    })
    .catch(err => {
        return res.status(401).json({ error: "not deleted!" });
    });
}