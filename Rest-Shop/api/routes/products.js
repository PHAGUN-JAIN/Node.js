const express=require('express');
const router=express.Router();

router.get('/', (req, res, next)=>{
  res.status(200).json({
    message: "Handling the GET request to /products"
  });
});

router.post('/', (req, res, next)=>{
  res.status(200).json({
    message: "Handling the POST request to /products"
  });
});

//handling request for some specific itemm
router.get('/:productId', (req, res, next)=>{
  const id=req.params.productId;
  if(id ==='special'){
  res.status(200).json({
      message:"you have discovered a special Id"

  });
} else{
  res.status(200).json({
    message:"You pased a Id"
  });
}
});

router.patch('/:productId',(req, res, next)=>{
  res.status(200).json({
    message:"Updated Product!"
  });
});
router.delete('/:productId',(req, res, next)=>{
  res.status(200).json({
    message:"Deleted Product!"
  });
});
module.exports=router;
