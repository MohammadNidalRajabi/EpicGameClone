import { ArrowFatUp, ArrowSquareUp, ArrowUp, FacebookLogo, TwitterLogo, YoutubeLogo } from 'phosphor-react';
import flogo from './assest/facebock.png'
import tlogo from './assest/twiter.png'
import ylogo from './assest/youtube.png'
import elogo from './assest/Epic.png'
import './Footer.css'
const Footer=()=>{
    return(
    <div className='Footer'>
        <div className='Container'>
            <div className='Container_Top'>
                <div className='Icon'>
                    <ul>
                        <li><img src={flogo} alt=""/></li>
                        <li><img src={tlogo} alt=""/></li>
                        <li><img src={ylogo} alt=""/></li>
                    </ul>

                </div>
                <div className='Action_Button_Top'>
                <ArrowSquareUp className='ArrowSquareUp' size={50} weight="light" onClick={()=>window.scrollTo(0,0)} />
                </div>
            </div>
            <div className='Container_Body'>
                <div className='Container_Body_Line'><h4>Resources</h4>
                <h4>Made By Epic Games</h4>
                </div>
                <div className='Container_Body_Copmonents'>
                    <div className='one'>
                        <h4>Support-A-Creator</h4>
                        <h4>Distribute on Epic Games</h4>
                        <h4>Careers</h4>
                        <h4>Company</h4>
                        </div>

                    <div className='tow'>
                        <h4>Fan Art Policy</h4>
                        <h4>UX Research</h4>
                        <h4>Store EULA</h4>
                    </div>
                    
                    <div className='three'>
                        <h4>Online Services</h4>
                        <h4>Community Rules</h4>
                        <h4>Epic Newsroom</h4>
                    </div>

                    <div className='four'>
                        <h4>Battle Breakers</h4>
                        <h4>Fortnite</h4>
                        <h4>Infinity Blade</h4>
                    </div>
                    
                    <div className='five'>
                        <h4>Robo Recall</h4>
                        <h4>Shadow Complex</h4>
                        <h4>Unreal Tournament</h4>
                    </div>
                </div>
                <hr />
                <div className='Container_Body_Copmonents_Info'>
                    <p>
                    © 2022, Epic Games, Inc. All rights reserved. Epic, Epic Games,
                     the Epic Games logo, Fortnite, the Fortnite logo, Unreal, Unreal Engine,
                      the Unreal Engine logo, Unreal Tournament, and the Unreal Tournament logo are trademarks or 
                      registered trademarks of Epic Games, Inc. in the United States of America and elsewhere. 
                      Other brands or product names are the trademarks of their respective owners. Non-US transactions 
                      through Epic Games International, S.à r.l.  
                    </p>
                    
                </div>

            </div>
            <div className='Container_Bottom'>
                <div className='Container_Bottom_Left'>
                    <ul>
                        <li>Terms of Service</li>
                        <li>Privacy Policy</li>
                        <li>Store Refund Policy</li>
                    </ul>

                </div>
                <div className='Container_Bottom_Right'>
                    <ul>
                        <li><img src={elogo} alt=''/></li>
                    </ul>
                </div>
            </div>
        </div>
        
    </div>
    )
}
export default Footer;