import model from '../model/stud.js';

class student {

    static create = async(req, res) => {
        // console.log(req.body)
        try {
            const { name, age, city } = req.body
            const doc = new model({
                name: name,
                age: age,
                city: city
            })
            const result = await doc.save()
            console.log(result)
            res.redirect("/student")
        } catch (err) {
            console.log(err)
        }
    }

    static edit = async(req, res) => {
        // console.log(req.params.id)
        try {
            const result = await model.findById(req.params.id)
            console.log(result)
            res.render("edit", { data: result })

        } catch (err) {
            console.log(err);
        }

    }

    static update = async(req, res) => {
        // console.log(req.params.id)
        // console.log(req.body)
        try {
            const result = await model.findByIdAndUpdate(req.params.id, req.body)
            res.redirect("/student")
        } catch (err) {
            console.log(err)
        }
    }
    static delete = async(req, res) => {
        try {
            const result = await model.findByIdAndDelete(req.params.id)

            res.redirect("/student")
        } catch (err) {
            console.log(err)
        }
    }
    static getdata = async(req, res) => {
        try {
            const result = await model.find()
                // console.log(result)
            res.render("index", { data: result })
        } catch (err) {
            console.log(err)
        }

    }
}

export default student