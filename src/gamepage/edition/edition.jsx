import './edition.css';

function Edition(){

    return(

        <div className="cont">
            <div className="imgg">

                <div className='im'>

                <img src="https://www.videogameschronicle.com/files/2022/02/sds5.jpg" height="120" width="200" />

                </div>

                <div className='behind'>
                    <div className='head'>
                        <div className='bg'>

                        <p style={{margin:"2px"}}>Base Game</p>
                        </div>
                        <p style={{color: "white"}}>standard game</p>
                    </div>
                    <p className='pp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam culpa officiis, iusto recusandae illo vero cis, sequi facere praesentium ducimus quam eum.</p>


                </div>
                
                
                
                
                </div>

                    <div className="imgdow">
                        <p className='pri'>$29.99</p>

                    <div className='bttt'>
                    <button className='butt2'>ADD TO CART</button>
                    <button className='butt2'>ADD TO WISHLIST</button>
                    </div>



                    </div>

                    
                
            
        </div>
     
    )
}

export default Edition;