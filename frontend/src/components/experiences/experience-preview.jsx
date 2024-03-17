import propTypes from "prop-types";
import userDefault from "../../assets/user-default.png";
import './experiences.css';

const ExperiencePreview = ({
	userName,
	time,
	comments,
	text,
	hashtags,
}) => {


	return (
		<div className="m-4">
			<div className={`w-fit flex flex-row mb-4`}>
				<div className={`col-2 relative`}>
					<img
						src={userDefault}
						alt="Imagen"
						className="w-16 h-16 rounded-full object-cover"
					/>
					<div className="line"></div>
				</div>
				<div className={`w-full col-4 px-2`}>
					<div className="flex justify-between items-center">
						<h3 className="col-span-2 text-md font-medium mr-4 text-white">
							{userName}
						</h3>
						<p className="col-span-2 text-sm text-white">
							{time.getMinutes() + " min"}
						</p>
					</div>
					<p className="col-span-2 text-white">{text}</p>
					<button className="bg-primary-color text-white py-1 px-4 mt-2 rounded-full flex items-center ">
						Seguir leyendo
					</button>
					<div className="flex justify-start mr-4 items-center">
						{hashtags.map((hashtag, index) => (
							<span key={index} className="text-white font-bold">
								{hashtag}
							</span>
						))}
					</div>
				</div>
			</div>
			<div className={`w-full flex flex-row justify-between`}>
				{comments && commentsImage()}
				{tools()}
			</div>
		</div>
	);
};

const commentsImage = () => {
	return (
		<div className={`w-fit flex flex-row`}>
			<img
				src={userDefault}
				alt="Imagen"
				className="w-5 h-5 rounded-full object-cover"
			/>
			<img
				src={userDefault}
				alt="Imagen"
				className="w-5 h-5 rounded-full object-cover"
			/>
			<img
				src={userDefault}
				alt="Imagen"
				className="w-5 h-5 rounded-full object-cover"
			/>
		</div>
	);
};

const tools = () => {
	return (
		<div className={`w-fit flex flex-row gap-4`}>
			<span className="material-symbols-outlined text-white">favorite</span>
			<span className="material-symbols-outlined text-white">chat_bubble</span>
			<span className="material-symbols-outlined text-white">volume_up</span>
		</div>
	);
};

ExperiencePreview.propTypes = {
	userName: propTypes.string,
	time: propTypes.Date,
	userImg: propTypes.string,
	text: propTypes.string,
	hashtags: propTypes.array,
	comments: propTypes.bool,
};

export default ExperiencePreview;
