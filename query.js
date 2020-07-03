const Pool=require('pg').Pool
const pool=new Pool({
    user:'postgres',
    host:'localhost',
    database:'demo',
    password:'vips',
    port:3201,
});

const addbusiness = (req, res) => {
    const {sid,company,address,contact,username } = req.body;
    pool.query('insert into business(sid,company,address,contact,username) values ($1,$2,$3,$4,$5)', [sid,company,address,contact,username], (error, result) => {
        if (error) {
            throw error;
        }
        res.status(201).send(`User Added..with ID: ${result.id}`);
        console.log('business signup details added');
    });
}

const deletebusiness= (req, res) => {
    const sid = parseInt(req.params.sid);
    console.log("delete"+sid);
    pool.query('delete from business where sid=$1', [sid], (error, result) => {
        if (error) {
            throw error
        }
        res.status(200).send(`user deleted by id:-${sid}`);
        // console.log("hello");
    })
}
const getbusinessbyid = (req, res) => {
    // const {username}=req.body;
    const sid = parseInt(req.params.sid);
    pool.query('select * from business where sid=$1', [sid], (error, result) => {
        if (error) {
            throw error;
        }
        res.status(200).json(result.rows);
        // console.log('data will be edited')
        console.log(result.rows)

    });
}
const updatebusiness = (req, res) => {
    const sid = parseInt(req.body.sid);
    const { company,address,contact,username  } = req.body;
    pool.query('update business set company=$1,address=$2,contact=$3,username=$4 where sid=$5',
        [company,address,contact,username,sid],
        (error, result) => {
            if (error) {
                throw error
            }
            res.status(200).send(`User Updated by ID:-${sid}`);
        }
    )
}


const addsignup = (req, res) => {
    const {name,contact,email,username,password } = req.body;
    pool.query('insert into signup(name,contact,email,username,password) values ($1,$2,$3,$4,$5)', [name,contact,email,username,password], (error, result) => {
        if (error) {
            throw error;
        }
        res.status(201).send(`User Added..with ID: ${result.id}`);
        console.log('signup details added');
    });
}

const getsignup= (req, res) => {
    pool.query('select * from signup order by sid asc', (error, result) => {
        if (error) {
            throw error;
        }
        res.status(200).json(result.rows);
    })
}
const deletesignup= (req, res) => {
    const sid = parseInt(req.params.sid);
    console.log("delete"+sid);
    pool.query('delete from signup where sid=$1', [sid], (error, result) => {
        if (error) {
            throw error
        }
        res.status(200).send(`user deleted by id:-${sid}`);
        // console.log("hello");
    })
}
const getsignupbyid = (req, res) => {
    // const {username}=req.body;
    const sid = parseInt(req.params.sid);
    pool.query('select * from signup where sid=$1', [sid], (error, result) => {
        if (error) {
            throw error;
        }
        res.status(200).json(result.rows);
        // console.log('data will be edited')
        console.log(result.rows)

    });
}
const updatesignup = (req, res) => {
    const sid = parseInt(req.body.sid);
    const { name,contact,email,username,password  } = req.body;
    pool.query('update signup set name=$1,contact=$2,email=$3,username=$4,password=$5 where sid=$6',
        [name,contact,email,username,password,sid],
        (error, result) => {
            if (error) {
                throw error
            }
            res.status(200).send(`User Updated by ID:-${sid}`);
        }
    )
}
const adddetails = (req, res) => {
    const {sid,username,quora,qcheck,yq,yqcheck,github,gitcheck,linkedin,linkcheck,fb,fbc,ig,igc,snap,snapc } = req.body;
    pool.query('insert into profile(sid,username,quora,qcheck,yq,yqcheck,github,gitcheck,linkedin,linkcheck,fb,fbc,ig,igc,snap,snapc) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16)', [sid,username,quora,qcheck,yq,yqcheck,github,gitcheck,linkedin,linkcheck,fb,fbc,ig,igc,snap,snapc ], (error, result) => {
        if (error) {
            throw error;
        }
        res.status(201).send(`Course Added..with ID:`);
        console.log('data added');
    });
}

const getdetails = (req, res) => {
    pool.query('select * from profile', (error, result) => {
        if (error) {
            throw error;
        }
        res.status(200).json(result.rows);
        
    })
}
const deletedetails= (req, res) => {
    const sid = parseInt(req.params.sid);
    // const username=req.body;
    pool.query('delete from profile where sid=$1', [sid], (error, result) => {
        if (error) {
            throw error
        }
        res.status(200).send(`user deleted by id:-${sid}`);
        console.log("hello");
    })
}
const getdetailsbyid = (req, res) => {
    // const {username}=req.body;
    const sid = parseInt(req.params.sid);
    // const =req.body;

    pool.query('select * from profile where sid=$1', [sid], (error, result) => {
        if (error) {
            throw error;
        }
        res.status(200).json(result.rows);
        console.log(sid);
        console.log(result.rows)

    });
}


const updatedetails = (req, res) => {
    const sid = parseInt(req.body.sid)
    console.log("id for edit"+sid);
    const { username,quora,qcheck,yq,yqcheck,github,gitcheck,linkedin,linkcheck,fb,fbc,ig,igc,snap,snapc} = req.body;
    pool.query('update profile set username=$1,quora=$2,qcheck=$3,yq=$4,yqcheck=$5,github=$6,gitcheck=$7,linkedin=$8,linkcheck=$9,fb=$10,fbc=$11,ig=$12,igc=$13,snap=$14,snapc=$15 where sid=$16',
        [username,quora,qcheck,yq,yqcheck,github,gitcheck,linkedin,linkcheck,fb,fbc,ig,igc,snap,snapc,sid],
        (error, result) => {
            if (error) {
                throw error
            }
            res.status(200).send(`User Updated by ID:-${sid}`);
        }
    )
    console.log('updated');
}

const getlogin= (req, res) => {
    const {username} = req.body;
    pool.query('select * from signup where username=$1', [username], (error, result) => {
        if (error) {
            throw error;
        }
        res.send({status:201,msg:'login successfully',data:result.rows});
        console.log(result.rows);
    });
}

module.exports = {
    addsignup,
    getsignup,
    getsignupbyid,
    adddetails,
    getdetails,
    getlogin,
    deletesignup,
    updatesignup,
    deletedetails,
    updatedetails,
    getdetailsbyid,
    addbusiness,
    getbusinessbyid,
    deletebusiness,
    updatebusiness
   
}