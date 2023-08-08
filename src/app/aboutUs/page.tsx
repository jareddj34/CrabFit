export default function Page() {
    return (
        <>
            <h1 className="flex justify-center text-4xl font-bold">About Me</h1>
            <div className="flex justify-center items-center">
                <img
                    src="/images/FacePic.png"
                    alt="Profile"
                    style={{
                        width: "150px",
                        height: "150px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        marginTop: "15px",
                        marginBottom: "15px",
                    }}
                />
            </div>
            <div className="flex justify-center items-center">
                <h2 className="text-3xl">Jared de Monteiro</h2>
            </div>

            <p className="text-center container max-w-3xl mt-4 mb-16">
                I created this website to test my skills and knowledge in web
                developement. I have a huge passion in working out, sports, and
                staying active. I also am greatly interested in the rapid rise
                of the use of AI. With this, I wanted to combine my interests,
                and produce something that would help people in a greater way.
            </p>

            <script
                src="https://platform.linkedin.com/badges/js/profile.js"
                async
                defer
                type="text/javascript"
            ></script>
            <a
                className="badge-base__link LI-simple-link flex justify-center text-center"
                href="https://www.linkedin.com/in/jared-de-monteiro-60aa7925b?trk=profile-badge"
            >
                Connect With Me!
            </a>
            <div
                className="badge-base LI-profile-badge flex justify-center"
                data-locale="en_US"
                data-size="medium"
                data-theme="light"
                data-type="VERTICAL"
                data-vanity="jared-de-monteiro-60aa7925b"
                data-version="v1"
                style={{ marginLeft: "50px" }}
            ></div>
        </>
    );
}
