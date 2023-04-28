import {config} from './dbconfig.js';
import sql from 'mssql';

export class PizzaService
{
    getAll = async () => {
        let returnList = null;
        try{
            let pool = await sql.connect(config);
            let result = await pool.request().query('SELECT * FROM Pizzas');
            returnList = result.recordsets[0];
        } catch(error){
            console.log(error);
        }
        return returnList;
    }

    getById = async (id) => {
        let returnEntity = null;
        try{
            let pool = await sql.connect(config);
            let result = await pool.request().input('pId',sql.Int,id).query('SELECT * FROM Pizzas WHERE id = @pId');
            returnEntity = result.recordsets[0][0];
        } catch(error){
            console.log(error);
        }
        return returnEntity;
    }
}

//export default PizzaService;