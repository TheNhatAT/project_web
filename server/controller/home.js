const mysql = require("mysql");
//start();

const pool = mysql.createPool({
    connectionLimit:10,
    host: "localhost",
    user:"root",
    password:"",
    database: "project_web"

})
exports.getAllBoarding_rooms = (req, res) =>{
    const addr = req.query;
    console.log(addr);
    pool.getConnection((err, connection)=>{
        if(err) throw err
        console.log(`connected as ${connection.threadId}`)
        connection.query(`SELECT * from boarding_rooms ORDER BY created_at DESC LIMIT 2`, (err, rows)=>{
            connection.release()
        if(!err){
            res.send(rows)
        }    
        else{
            console.log(err)
        }
        })
    })
}

exports.findRoommate = (req, res) =>{
    const result = req.query;
    console.log(result);
    pool.getConnection((err, connection)=>{
        if(err) throw err
        console.log(`connected as ${connection.threadId}`)
        console.log(result['name'])
        connection.query(`SELECT * from boarding_rooms where name like '%${result['name']}%' `, (err, rows)=>{
            connection.release()
        if(!err){
            res.send(rows)
        }    
        else{
            console.log(err)
        }
        })
    })
}

exports.findByAddress = (req, res) =>{
    const result = req.query;
    console.log(result);
    pool.getConnection((err, connection)=>{
        if(err) throw err
        console.log(`connected as ${connection.threadId}`)
        connection.query(`SELECT * from boarding_rooms where address like '${result['address']}%' `, (err, rows)=>{
            connection.release()
        if(!err){
            res.send(rows)
        }    
        else{
            console.log(err)
        }
        })
    })
}

exports.filter = (req, res) =>{
    const result = req.query;
    console.log(result);
    pool.getConnection((err, connection)=>{
        if(err) throw err
        console.log(`connected as ${connection.threadId}`)
        if(!('minimal_room_price' in result)){
            if('address' in result && 'minimal_area' in result && 'category' in result){
                connection.query(`SELECT * from boarding_rooms 
                                    where address like '${result['address']}%' 
                                        and area >= ${result['minimal_area']} 
                                        and area <= ${result['maximal_area']} 
                                        and category like '${result['category']}' `,(err, rows)=>{

                connection.release()
                if(!err){
                    res.send(rows)
                }    
                else{
                    console.log(err)
                }
                })
            }
            else if('address' in result && 'minimal_area' in result && !('category' in result) ){
                connection.query(`SELECT * from boarding_rooms 
                                    where address like '${result['address']}%' 
                                        and area >= ${result['minimal_area']} 
                                        and area <= ${result['maximal_area']} `, (err, rows)=>{

                connection.release()
                if(!err){
                    res.send(rows)
                }    
                else{
                    console.log(err)
                }
                })
            }
            else if('address' in result && !('minimal_area' in result) && !('category' in result) ) {
                connection.query(`SELECT * from boarding_rooms where address like '${result['address']}%'`, (err, rows)=>{
                
                    connection.release()
                if(!err){
                    res.send(rows)
                }    
                else{
                    console.log(err)
                }
                })
            }
            else if(!('address' in result) && 'minimal_area' in result && 'category' in result ) {
            connection.query(`SELECT * from boarding_rooms 
                                where area >= ${result['minimal_area']} 
                                    and area <= ${result['maximal_area']} 
                                    and category like '${result['category']}'`, (err, rows)=>{

                connection.release()
                if(!err){
                    res.send(rows)
                }    
                else{
                    console.log(err)
                }
                })
            }
            else if(!('address' in result) && !('minimal_area' in result) && 'category' in result ) {
                connection.query(`SELECT * from boarding_rooms where category like '${result['category']}'`, (err, rows)=>{

                connection.release()
                if(!err){
                    res.send(rows)
                }    
                else{
                    console.log(err)
                }
                })
            }
            else if(!('address' in result) && 'minimal_area' in result && !('category' in result) ) {
                connection.query(`SELECT * from boarding_rooms where area >= ${result['minimal_area']} and area <= ${result['maximal_area']}`, (err, rows)=>{
                    
                connection.release()
                if(!err){
                    res.send(rows)
                }    
                else{
                    console.log(err)
                }
                })
            }
            else if('address' in result && !('minimal_area' in result) && 'category' in result ) {
                connection.query(`SELECT * from boarding_rooms where address like '${result['address']}%' and category like '${result['category']}'`, (err, rows)=>{
                    
                connection.release()
                if(!err){
                    res.send(rows)
                }    
                else{
                    console.log(err)
                }
                })
            }
        }
    else{
        if('address' in result && 'minimal_area' in result && 'category' in result){
            connection.query(`SELECT * from boarding_rooms 
                                where address like '${result['address']}%' 
                                    and area >= ${result['minimal_area']} 
                                    and area <= ${result['maximal_area']} 
                                    and category like '${result['category']}'
                                    and room_price >= ${result['minimal_room_price']} 
                                    and room_price <= ${result['maximal_room_price']}`,(err, rows)=>{

            connection.release()
            if(!err){
                res.send(rows)
            }    
            else{
                console.log(err)
            }
            })
        }
        else if(!('address' in result) && !('minimal_area' in result) && !('category' in result) ) {
            connection.query(`SELECT * from boarding_rooms where room_price >= ${result['minimal_room_price']} 
                                                                and room_price <= ${result['maximal_room_price']}`, (err, rows)=>{
                
            connection.release()
            if(!err){
                res.send(rows)
            }    
            else{
                console.log(err)
            }
            })
        }
        else if('address' in result && 'minimal_area' in result && !('category' in result) ){
            connection.query(`SELECT * from boarding_rooms 
                                where address like '${result['address']}%' 
                                    and area >= ${result['minimal_area']} 
                                    and area <= ${result['maximal_area']} 
                                    and room_price >= ${result['minimal_room_price']} 
                                    and room_price <= ${result['maximal_room_price']}`, (err, rows)=>{

            connection.release()
            if(!err){
                res.send(rows)
            }    
            else{
                console.log(err)
            }
            })
        }
        else if('address' in result && !('minimal_area' in result) && !('category' in result) ) {
            connection.query(`SELECT * from boarding_rooms where address like '${result['address']}%'
                                                                and room_price >= ${result['minimal_room_price']} 
                                                                and room_price <= ${result['maximal_room_price']}`, (err, rows)=>{
            
                connection.release()
            if(!err){
                res.send(rows)
            }    
            else{
                console.log(err)
            }
            })
        }
        else if(!('address' in result) && 'minimal_area' in result && 'category' in result ) {
        connection.query(`SELECT * from boarding_rooms 
                            where area >= ${result['minimal_area']} 
                                and area <= ${result['maximal_area']} 
                                and category like '${result['category']}'
                                and room_price >= ${result['minimal_room_price']} 
                                and room_price <= ${result['maximal_room_price']}`, (err, rows)=>{

            connection.release()
            if(!err){
                res.send(rows)
            }    
            else{
                console.log(err)
            }
            })
        }
        else if(!('address' in result) && !('minimal_area' in result) && 'category' in result ) {
            connection.query(`SELECT * from boarding_rooms where category like '${result['category']}'
                                                            and room_price >= ${result['minimal_room_price']} 
                                                            and room_price <= ${result['maximal_room_price']}`, (err, rows)=>{

            connection.release()
            if(!err){
                res.send(rows)
            }    
            else{
                console.log(err)
            }
            })
        }
        else if(!('address' in result) && 'minimal_area' in result && !('category' in result) ) {
            connection.query(`SELECT * from boarding_rooms where area >= ${result['minimal_area']}
                                                            and area <= ${result['maximal_area']}
                                                            and room_price >= ${result['minimal_room_price']} 
                                                            and room_price <= ${result['maximal_room_price']}`, (err, rows)=>{
                
            connection.release()
            if(!err){
                res.send(rows)
            }    
            else{
                console.log(err)
            }
            })
        }
        else if('address' in result && !('minimal_area' in result) && 'category' in result ) {
            connection.query(`SELECT * from boarding_rooms where address like '${result['address']}%' 
                                                                and category like '${result['category']}'
                                                                and room_price >= ${result['minimal_room_price']} 
                                                                and room_price <= ${result['maximal_room_price']}`, (err, rows)=>{
                
            connection.release()
            if(!err){
                res.send(rows)
            }    
            else{
                console.log(err)
            }
            })
        }
    }
    })
}
exports.pageFragment = (req, res) =>{
    const result = req.query;
    console.log(result);
    pool.getConnection((err, connection)=>{
        if(err) throw err
        console.log(`connected as ${connection.threadId}`)
        let page = (result['page'] - 1)*2;
        connection.query(`SELECT * from boarding_rooms LIMIT ${page}, 2`, (err, rows)=>{
            connection.release()
        if(!err){
            res.send(rows)
        }    
        else{
            console.log(err)
        }
        })
    })
}
