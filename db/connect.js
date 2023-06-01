import mongoose from 'mongoose'


const connect = async(url) => {
    try {
        const option = {
            dbName: 'information',
        };
        await mongoose.connect(url, option);
        console.log("connection successfull......");
    } catch (err) {
        console.log(err);
    }

}
export default connect;