import React from 'react';

function LastCollection() {
    return (
        <section className="last-collection">
            <img className="last-collection__image" src="images/smoking.jpg" alt="smoking"></img>
            <div className="last-collection__content">
                <h2 className="section__title last-collection__title">коллекция 2018</h2>
                <hr/>
                <p className="last-collection__text">Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Non rutrum ornare ut mattis habitant dui arcu. 
                    Sagittis amet nunc ut neque quis nibh arcu. Vivamus vestibulum nisi et 
                    venenatis sed scelerisque magna consectetur. Amet convallis quis gravida 
                    facilisis vulputate. Faucibus facilisi habitasse ipsum interdum dictum 
                    aliquet. Velit quis ullamcorper pulvinar nulla malesuada integer. 
                    Aenean praesent viverra nulla nullam natoque volutpat curabitur auctor. 
                    Viverra viverra ullamcorper scelerisque risus dignissim egestas. 
                    Id aliquam a aliquam egestas leo orci pharetra sed diam. 
                </p>
                <a href="link" className="section__button">Посмотреть коллекцию</a>
            </div>
        </section>
    )
}

export default LastCollection;