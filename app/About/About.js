import React from 'react';

const AboutUs = () => {
  return (
    <div className="p-10 flex flex-col md:flex-row">
      <div className="flex-none w-full md:w-1/3">
        <img
          className="mb-5 rounded-lg max-w-full h-auto"
          src="https://cdn.vox-cdn.com/thumbor/p3GjD-7suCuZWD7nH6ZUoWACP_g=/0x0:9467x6311/1200x800/filters:focal(3977x2399:5491x3913)/cdn.vox-cdn.com/uploads/chorus_image/image/69323734/Side_Piece_2___Anthony_Mair.0.jpg"
          alt="About Us"
        />
      </div>
      <div className="md:ml-5 md:w-2/3">
        <h2 className="text-3xl font-bold mb-5">About Us</h2>
        <p className="mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel odio ac est eleifend venenatis ut non metus. Phasellus cursus diam sed lacus efficitur, non dapibus mauris viverra. Quisque consectetur risus non pharetra sagittis. Nulla facilisi. Phasellus quis lacus a nisl aliquam finibus. Praesent a odio vel neque tristique rutrum.
        </p>
        <p className="mb-5">
          Vestibulum eu ullamcorper ex. Nunc consectetur odio sed urna convallis, nec dignissim justo vulputate. Mauris sagittis, erat eu cursus pellentesque, dui neque eleifend metus, ut auctor mi arcu sit amet nisl. Morbi efficitur efficitur est, sed tincidunt elit consequat at. Nam viverra, leo et sollicitudin gravida, nisi eros congue mi, vel malesuada eros turpis vel enim.
        </p>
        <p className="mb-5">
          Quisque vel consequat elit. Nunc porttitor turpis eget leo scelerisque, in tincidunt orci eleifend. Fusce bibendum orci elit, ac semper lorem rutrum eu. Nullam maximus, lorem eu consequat tincidunt, dui ante fermentum neque, sed euismod elit nisl eu mauris. Integer vehicula pharetra consectetur. Sed mollis metus sit amet lectus placerat, sed semper velit posuere. Curabitur id fermentum ligula.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
