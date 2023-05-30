import React from "react";


const RecommandCars = (props) =>{

    const { carName, retweet, imgUrl, rentPrice, parcentage } = props.item

    return (



        <div className="remmand_car_card">
<div className="recommand_car_top">

<h5><span><i class="ri-refresh-line"></i></span>{parcentage}% Recommanded</h5>

</div>


<div className="recommand_card_image">

    <img src={imgUrl} alt="100%" width="200" />
</div>

<div className="recommand_card_bottom">

<h4>{carName}</h4>

<div>

    <div className="recommand_card_other">
    <div className="recommand_icons">
    <p>
    
    <i class="ri-repeat-line">

    </i>
    {retweet}k
    
    </p>
    <p><i class="ri-settings-2-line"></i></p>
    <p>
   
    <i class="ri-timer-flash-line"></i>

    </p>

    </div>
    <span>${rentPrice}</span>
</div>
</div>
</div>

</div>
    );
}

export default RecommandCars;