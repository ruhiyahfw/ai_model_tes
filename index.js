const tf = require('@tensorflow/tfjs-node');

let model;

const input = []

async function main(){
    if (!model){
        try{
            const path = "BreedClassifier2"
            model = await tf.node.loadSavedModel(path, ['serve'], 'serving_default');
            console.log("berhasil ")
            // const output = model.predict(input);
            // console.log(output)
        }
        catch (err){
            console.log(err)
        }
    }
    
}

main()
