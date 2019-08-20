import React, { Component } from "react";

export const Footer = () => (
	<footer id="gtco-footer" role="contentinfo">
		<div className="gtco-container">
			<div className="row row-p	b-md">
				<div className="col-md-4">
					<div className="gtco-widget">
						<h3>
							About{" "}
							<span className="footer-logo">
								Lika a Club
								<span>.</span>
							</span>
						</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eos molestias quod sint
							ipsum possimus temporibus officia iste perspiciatis consectetur in fugiat repudiandae cum.
							Totam cupiditate nostrum ut neque ab?
						</p>
					</div>
				</div>

				<div className="col-md-4 col-md-push-1">
					<div className="gtco-widget">
						<h3>Links</h3>
						<ul className="gtco-footer-links">
							<li>
								<a href="#">Knowledge Base</a>
							</li>
							<li>
								<a href="#">Career</a>
							</li>
							<li>
								<a href="#">Press</a>
							</li>
							<li>
								<a href="#">Terms of services</a>
							</li>
							<li>
								<a href="#">Privacy Policy</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="col-md-4">
					<div className="gtco-widget">
						<h3>Get In Touch</h3>
						<ul className="gtco-quick-contact">
							<li>
								<a href="#">
									<i className="icon-phone" /> +1 234 567 890
								</a>
							</li>
							<li>
								<a href="#">
									<i className="icon-mail2" /> info@FreeHTML5.co
								</a>
							</li>
							<li>
								<a href="#">
									<i className="icon-chat" /> Live Chat
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="row copyright">
				<div className="col-md-12">
					<p className="pull-left">
						<small className="block">&copy; 2016 Free HTML5. All Rights Reserved.</small>
						<small className="block" />
					</p>
					<p className="pull-right">
						<ul className="gtco-social-icons pull-right">
							<li>
								<a href="#">
									<i className="icon-twitter" />
								</a>
							</li>
							<li>
								<a href="#">
									<i className="icon-facebook" />
								</a>
							</li>
							<li>
								<a href="#">
									<i className="icon-linkedin" />
								</a>
							</li>
							<li>
								<a href="#">
									<i className="icon-dribbble" />
								</a>
							</li>
						</ul>
					</p>
				</div>
			</div>
		</div>
	</footer>
);
