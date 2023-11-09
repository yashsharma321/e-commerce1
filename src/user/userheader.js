import {Link} from 'react-router-dom';
        
const Userheader = () => {
    return(
        <div className='container mt-3 mb-5'>
            <div className='row'>
                <div className='col-lg-4'>
                    <h1 className='text-primary text-center'>
                        React Shopping App
                    </h1>
                </div>
                <div className='col-lg-8 text-end'>
                    <div className='btn-group'>
                        <Link className='btn btn-primary' to='/'><i className='fa fa-shopping-bag'></i> Shopping</Link>
                        <Link className='btn btn-info text-white' to='/cart'><i className='fa fa-shopping-cart'></i> My Cart</Link>
                        <Link className='btn btn-success' to='/register'><i className='fa fa-user-plus'></i> Create Account</Link>
                        <Link className='btn btn-warning text-white' to='/login'><i className='fa fa-lock'></i> Login</Link>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-12 mt-3'>
                    
                <div id="carouselExampleIndicators" class="carousel slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-carousel-1-img.png" width="800" height="650" alt="First slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-carousel-2-img.png" width="800" height="650" alt="Second slide"/>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-carousel-3-img.png" width="800" height="650" alt="Third slide"/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                  </div>

                </div>
            </div>
        </div>
    )
}

export default Userheader;