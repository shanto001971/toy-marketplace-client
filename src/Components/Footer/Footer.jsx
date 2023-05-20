

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <img className="h-20 w-20"  src="https://seeklogo.com/images/T/toy-story-3-logo-D2E22F3746-seeklogo.com.png" alt="" />
                    <p>Toy Store Industries Ltd.<br />Providing reliable Toy marketplace 1992</p>
                </div>
                <img src="" alt="" />
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design : ToyStore</a>
                    <a className="link link-hover">Marketing And Selling</a>
                    <a className="link link-hover">Advertisement : for grow investment</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us : Admin</a>
                    <a className="link link-hover">Contact : +05555555</a>
                    <a className="link link-hover">Facebook : ToyStore@</a>
                    <a className="link link-hover">Gmail : ToyStore@.com</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of Condition</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;