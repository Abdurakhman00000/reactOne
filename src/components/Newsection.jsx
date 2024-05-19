import manWorking1 from '../image/newSectionImg.png'
import manWorking2 from '../image/newSectionImg2.png'
import React from 'react';

const Newsection = () => {
    return (
        <div>
            <div className="newSection">
                <div className="container">
                    <div className="newSection">



                        <div className="newBlock1">

                            <div className="newBlock1_img">
                                <img src={manWorking1} alt="" />
                            </div>

                            <div className="newBlock1_text">
                                <h1> We complete every projects <br /> extra care as customer need</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, <br /> non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nuncoe <br /> scelerisque in. orem ipsum dolor sit amet, consectetur adipisicing elit. Labore <br /> eius molestiae facere, natus reprehenderit eaque eum, autem ipsam. Magfini, <br /> error. Tempora odit laborum iure inventore possimus laboriosam qui nam.</p>
                                <button>Read more</button>
                            </div>
                        </div>



                        <div className="newBlock2">

                        <div className="newBlock2_text">
                                <h1> We complete every projects <br /> extra care as customer need</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, <br /> non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nuncoe <br /> scelerisque in. orem ipsum dolor sit amet, consectetur adipisicing elit. Labore <br /> eius molestiae facere, natus reprehenderit eaque eum, autem ipsam. Magfini, <br /> error. Tempora odit laborum iure inventore possimus laboriosam qui nam.</p>
                                <button>Read more</button>
                            </div>

                            <div className="newBlock2_img">
                                <img src={manWorking2} alt="" />
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsection;