export class Validation{
    static email = (key, model)=>{
        let error = null;

        if (!model) {
            error = {
                [key]: 'Field is required'
            }
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(model)) {
            error = {
                [key]: 'Invalid email address'
            }
        }
        return error;
    }

    static required = (key , model)=>{
        let error = null;
        model = model || '';

        if (!model.length) {
            error = {
                [key]: 'Field is empty'
            }
        }

        return error;
    }

    static run = (rules, value) =>{
        let status = null;

        for (let name of Object.keys(rules || {})) {
            let error = rules[name](name, value);

            if (error) {
                status = {
                    [name] : error[name]
                }
            }
        }
        return status;
    }
}