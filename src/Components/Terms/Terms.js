import { React } from 'react';
import { Button } from "react-bootstrap";
import terms from '../images/Terms.png';
import NavBar from '../NavBar';
import './Terms.css';
import emailicon from '../images/emailicon.svg';
import curve from '../images/curve.svg';
import phone from '../images/phone.svg';
import circle1 from '../images/circle1.svg';
import circle2 from '../images/circle2.svg';
import circle3 from '../images/circle3.svg';
import circle4 from '../images/circle4.svg';
import bar from '../images/bar.svg';
import { Row, Col, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Footer from '../Footer';

export default function TermsConditions() {
  return (
    <div>
     <NavBar />
     <center> <h1 style={{color:"#062C51"}}>Terms & Conditions</h1>
      <img src={terms} className="termsImage" /></center>
      <div style={{marginLeft:"3rem",marginTop:"2rem",marginRight:"3rem"}}>
        <p><b>Thanks for exploring opportunity to be part of JellyKi club. We believe in creating a cohesive
        and collaborative environment to learn and share knowledge covering
        both its breadth and depth.</b></p>
        <p style={{ fontSize: "15px", lineHeight: "35px" }}>These Terms of Service (“Terms”) apply to your access to and use of the websites, mobile applications and other online products and services (collectively, the “Services”) <br />
        provided by JellyKi as part of Nebutech Analytics (“NEBUTECH” or “JellyKi”). By clicking your consent (e.g. “Continue,” “Sign-in,” or “Sign-up,”) or by using our Services, <br />
        you agree to these Terms, including the mandatory arbitration provision and class action waiver in the Resolving Disputes; Binding Arbitration Section.<br />
        Our Privacy Policy explains how we collect and use your information while our Rules outline your responsibilities when using our Services. By using our Services, <br />
        you’re agreeing to be bound by these Terms and our Rules. Please see our Privacy Policy for information about how we collect, use, share and otherwise process <br />
        information about you.<br />
        If you have any questions about these Terms or our Services, please contact us at support@nebutech.in.</p><br />
        <h3>Your Account and Responsibilities</h3><br />
        <p style={{ fontSize: "18px", lineHeight: "35px" }}>You’re responsible for your use of the Services and any content you provide, including compliance with applicable laws. Content on the <br />
        Services may be protected by others’ intellectual property rights. Please don’t copy, upload, download, or share content unless you <br />
        have the right to do so.</p><br />
        <h3>Your use of the Services must comply with our Rules.</h3><br />
        <p style={{ fontSize: "18px", lineHeight: "35px" }}>You may need to register for an account to access some or all of our Services. Help us keep your account protected. Safeguard your <br />
        password to the account, and keep your account information current. We recommend that you do not share your password with others.<br />
        If you’re accepting these Terms and using the Services on behalf of someone else (such as another person or entity), you represent that <br />
        you’re authorized to do so, and in that case the words “you” or “your” in these Terms include that other person or entity.</p><br />
        <h3>To use our Services, you must be at least 16 years old.</h3><br />
        <p style={{ fontSize: "18px", lineHeight: "35px" }}>If you use the Services to access, collect, or use personal information about other JellyKi users (“Personal Information”), you agree to do so <br />
        in compliance with applicable laws. You further agree not to sell any Personal Information, where the term “sell” has the meaning given to <br />
        it under applicable laws.<br />
        For Personal Information you provide to us (e.g. as a Newsletter Editor), you represent and warrant that you have lawfully collected the <br />
        Personal Information and that you or a third party has provided all required notices and collected all required consents before collecting the <br />
        Personal Information. You further represent and warrant that JellyKi’s use of such Personal Information in accordance with the purposes for <br />
        which you provided us the Personal Information will not violate, misappropriate or infringe any rights of another (including intellectual <br />
        property rights or privacy rights) and will not cause us to violate any applicable laws.</p><br />
        <h3>User Content on the Services</h3><br />
        <p style={{ fontSize: "18px", lineHeight: "35px" }}>JellyKi may review your conduct and content for compliance with these Terms and our Rules, and reserves the right to remove any <br />
        violating content.<br />
        JellyKi reserves the right to delete or disable content alleged to be infringing the intellectual property rights of others, and to terminate <br />
        accounts of repeat infringers. We respond to notices of alleged copyright infringement if they comply with the law; please report such <br />
        notices using our Copyright Policy.<br />
        We are committed to safeguard your personal information collected and handled by us and look forward to your continued support for the <br />
        same. In case of any feedback or concern regarding protection of your personal information, you can contact us at support@nebutech.in. <br />
        We will strive to address your feedback and concerns in a timely and effective manner.<br />
        NEBUTECH reserves the right to amend or modify this Privacy Policy at any time, as and when the need arises. We request you to visit our <br />
        website http://nebutech.company.in/ periodically for contemporary information and changes.</p><br />
        <h3>Rights and Ownership</h3><br />
        <p style={{ fontSize: "18px", lineHeight: "35px" }}>JellyKi may review your conduct and content for compliance with these Terms and our Rules, and reserves the right to remove any <br />
        violating content.<br />
        JellyKi reserves the right to delete or disable content alleged to be infringing the intellectual property rights of others, and to terminate <br />
        accounts of repeat infringers. We respond to notices of alleged copyright infringement if they comply with the law; please report such <br />
        notices using our Copyright Policy.<br />
        We are committed to safeguard your personal information collected and handled by us and look forward to your continued support for the <br />
        same. In case of any feedback or concern regarding protection of your personal information, you can contact us at support@nebutech.in. <br />
        We will strive to address your feedback and concerns in a timely and effective manner.<br />
        NEBUTECH reserves the right to amend or modify this Privacy Policy at any time, as and when the need arises. We request you to visit our <br />
        website http://nebutech.company.in/ periodically for contemporary information and changes.</p><br />
        <h3>Termination</h3><br />
        <p style={{ fontSize: "18px", lineHeight: "35px" }}>You’re free to stop using our Services at any time. We reserve the right to suspend or terminate your access to the Services with <br />
        or without notice.</p><br />
        <h3>Transfer and Processing Data</h3><br />
        <p style={{ fontSize: "18px", lineHeight: "35px" }}>In order for us to provide our Services, you agree that we may process, transfer and store information about you in India and other
        countries, where you may not have the same rights and protections as you do under local law.</p><br />
        <h3>Indemnification</h3><br />
        <p style={{ fontSize: "18px", lineHeight: "35px" }}>To the fullest extent permitted by applicable law, you will indemnify, defend and hold harmless JellyKi, and our officers, directors, agents, <br />
        partners and employees (individually and collectively, the “JellyKi Parties”) from and against any losses, liabilities, claims, demands, <br />
        damages, expenses or costs (“Claims”) arising out of or related to your violation, misappropriation or infringement of any rights of <br />
        another (including intellectual property rights or privacy rights) or your violation of the law. You agree to promptly notify JellyKi Parties of <br />
        any third-party Claims, cooperate with JellyKi Parties in defending such Claims and pay all fees, costs and expenses associated with <br />
        defending such Claims (including attorneys’ fees). You also agree that the JellyKi Parties will have control of the defence or settlement, <br />
        at JellyKi’s sole option, of any third-party Claims.</p><br />
        <h3>Disclaimers — Service is “As Is”</h3><br />
        <p style={{ fontSize: "18px", lineHeight: "35px" }}>JellyKi aims to give you great Services but there are some things we can’t guarantee. Your use of our Services is at your sole risk.<br />
        You understand that our Services and any content posted or shared by users on the Services are provided “as is” and “as available” <br />
        without warranties of any kind, either express or implied, including implied warranties of merchantability, fitness for a particular purpose, <br />
        title, and non-infringement. In addition, JellyKi doesn’t represent or warrant that our Services are accurate, complete, reliable, current or <br />
        error-free. No advice or information obtained from JellyKi or through the Services will create any warranty or representation not expressly <br />
        made in this paragraph. JellyKi may provide information about third-party products, services, activities or events, or we may allow third <br />
        parties to make their content and information available on or through our Services (collectively, “Third-Party Content”). We do not control or <br />
        endorse, and we make no representations or warranties regarding, any Third-Party Content. You access and use Third-Party Content at your <br />
        own risk. Some locations don’t allow the disclaimers in this paragraph and so they might not apply to you.</p><br />
        <h3>Limitation of Liability</h3><br />
        <p style={{ fontSize: "18px", lineHeight: "35px" }}>We don’t exclude or limit our liability to you where it would be illegal to do so; this includes any liability for the gross negligence, fraud or <br />
        intentional misconduct of JellyKi or the other JellyKi Parties in providing the Services. In countries where the following types of exclusions <br />
        aren’t allowed, we’re responsible to you only for losses and damages that are a reasonably foreseeable result of our failure to use reasonable <br />
        care and skill or our breach of our contract with you. This paragraph doesn’t affect consumer rights that can’t be waived or limited by any <br />
        contract or agreement.<br />
        In countries where exclusions or limitations of liability are allowed, JellyKi and JellyKi Parties won’t be liable for:<br />
        (a) Any indirect, consequential, exemplary, incidental, punitive, or special damages, or any loss of use, data or profits, under any legal theory, <br />
        even if JellyKi or the other JellyKi Parties have been advised of the possibility of such damages.<br />
        (b) Other than for the types of liability we can’t limit by law (as described in this section), we limit the total liability of JellyKi and the other <br />
        JellyKi Parties for any claim arising out of or relating to these Terms or our Services, regardless of the form of the action, to the greater of <br />
        1000.00 INR or the amount paid by you to use our Services.</p><br />
        <h3>Resolving Disputes; Binding Arbitration</h3><br />
        <p style={{ fontSize: "18px", lineHeight: "35px" }}>We want to address your concerns without needing a formal legal case. Before filing a claim against JellyKi, you agree to contact us and <br />
        attempt to resolve the claim informally by sending a written notice of your claim by email at legal@nebutech.in. The notice must <br />
        (a) include your name, residence address, email address, and telephone number; <br />
        (b) describe the nature and basis of the claim; and <br />
        (c) set forth the specific relief sought. Our notice to you will be sent to the email address associated with your online account and will <br />
        contain the information described above. If we can’t resolve matters within thirty (30) days after any notice is sent, either party may <br />
        initiate a formal proceeding.<br />
        Please read the following section carefully because it requires you to arbitrate certain disputes and claims with JellyKi and limits the manner <br />
        in which you can seek relief from us, unless you opt out of arbitration by following the instructions set forth below. No class or representative <br />
        actions or arbitrations are allowed under this arbitration provision. In addition, arbitration precludes you from suing in court.<br />
        (a) No Representative Actions. You and JellyKi agree that any dispute arising out of or related to these Terms or our Services is personal to <br />
        you and JellyKi and that any dispute will be resolved solely through individual action, and will not be brought as a class arbitration, class <br />
        action or any other type of representative proceeding.<br />
        (b) Arbitration of Disputes. Except for small claims disputes in which you or JellyKi seeks to bring an individual action in small claims court <br />
        located in the county where you reside or disputes in which you or JellyKi seeks injunctive or other equitable relief for the alleged infringement <br />
        or misappropriation of intellectual property, you and JellyKi waive your rights to a jury trial and to have any other dispute arising out of or <br />
        related to these Terms or our Services, including claims related to privacy and data security, (collectively, “Disputes”) resolved in court. <br />
        All Disputes submitted to be resolved through confidential, binding arbitration before one arbitrator. Arbitration proceedings will be held <br />
        in Bangalore, Karnataka unless you’re a consumer, in which case you may elect to hold the arbitration in your county of residence. <br />
        For purposes of this section a “consumer” means a person using the Services for personal, family or household purposes. <br />
        You and JellyKi agree that Disputes will be held in accordance with the Arbitration Rules and Procedures.<br />
        (c) The arbitration will allow for the discovery or exchange of non-privileged information relevant to the Dispute. The arbitrator, JellyKi,<br />
        and you will maintain the confidentiality of any arbitration proceedings, judgments and awards, including information gathered, prepared <br />
        and presented for purposes of the arbitration or related to the Dispute(s) therein. The arbitrator will have the authority to make appropriate <br />
        rulings to safeguard confidentiality, unless the law provides to the contrary. The duty of confidentiality doesn’t apply to the extent that <br />
        disclosure is necessary to prepare for or conduct the arbitration hearing on the merits, in connection with a court application for a <br />
        preliminary remedy, or in connection with a judicial challenge to an arbitration award or its enforcement, or to the extent that disclosure is <br />
        otherwise required by law or judicial decision.<br />
        (d) You and JellyKi agree that for any arbitration you initiate, you will pay the filing fee (up to a maximum of 50000 INR if you are a consumer), <br />
        and JellyKi will pay the remaining fees and costs. For any arbitration initiated by JellyKi, JellyKi will pay all fees and costs. You and JellyKi <br />
        agree that the state or federal courts of the State of Karnataka have exclusive jurisdiction over any appeals and the enforcement of an <br />
        arbitration award.<br />
        (e) Any Dispute must be filed within one year after the relevant claim arose; otherwise, the Dispute is permanently barred, which means that <br />
        you and JellyKi will not have the right to assert the claim.<br />
        (f) You have the right to opt out of binding arbitration within 30 days of the date you first accepted the terms of this section by sending an <br />
        email of your request to legal@nebutech.in. In order to be effective, the opt-out notice must include your full name and address and clearly <br />
        indicate your intent to opt out of binding arbitration. By opting out of binding arbitration, you are agreeing to resolve Disputes in accordance <br />
        with the next section regarding “Governing Law and Venue.”<br />
        (g) If any portion of this section is found to be unenforceable or unlawful for any reason, <br />
        (1) the unenforceable or unlawful provision shall be severed from these Terms; <br />
        (2) severance of the unenforceable or unlawful provision shall have no impact whatsoever on the remainder of this section or the parties’ <br />
        ability to compel arbitration of any remaining claims on an individual basis pursuant to this section; and (3) to the extent that any claims <br />
        must therefore proceed on a class, collective, consolidated, or representative basis, such claims must be litigated in a civil court of <br />
        competent jurisdiction and not in arbitration, and the parties agree that litigation of those claims shall be stayed pending the outcome <br />
        of any individual claims in arbitration. Further, if any part of this section is found to prohibit an individual claim seeking public injunctive <br />
        relief, that provision will have no effect to the extent such relief is allowed to be sought out of arbitration, and the remainder of this section <br />
        will be enforceable.</p><br />
        <h3>Governing Law and Venue</h3><br /><br />
        <p style={{ fontSize: "18px", lineHeight: "25px" }}>These Terms and any dispute that arises between you and JellyKi will be governed by Republic of Indian law.<br />
        Some countries have laws that require agreements to be governed by the local laws of the consumer’s country. This paragraph doesn’t <br />
        override those laws.</p><br />
        <h3>Amendments</h3><br />
        <p style={{ fontSize: "18px", lineHeight: "25px" }}>We may make changes to these Terms from time to time. If we make changes, we’ll provide you with notice of them by sending an email <br />
        to the email address associated with your account, offering an in-product notification, or updating the date at the top of these Terms. <br />
        Unless we say otherwise in our notice, the amended Terms will be effective immediately, and your continued use of our Services after we <br />
        provide such notice will confirm your acceptance of the changes. If you don’t agree to the amended Terms, you must stop using our Services.<br />
        </p><br />
        <h3>Severability</h3><br />
        <p style={{ fontSize: "18px", lineHeight: "25px" }}>If any provision or part of a provision of these Terms is unlawful, void or unenforceable, that provision or part of the provision is deemed <br />
        severable from these Terms and does not affect the validity and enforceability of any remaining provisions.<br />
        </p><br />
        <h3>Miscellaneous</h3><br />
        <p style={{ fontSize: "18px", lineHeight: "25px" }} >JellyKi’s failure to exercise or enforce any right or provision of these Terms will not operate as a waiver of such right or provision. <br />
        These Terms, and the terms and policies listed in the Other Terms and Policies that May Apply to You Section, reflect the entire agreement <br />
        between the parties relating to the subject matter hereof and supersede all prior agreements, statements and understandings of the parties. <br />
        The section titles in these Terms are for convenience only and have no legal or contractual effect. Use of the word “including” will be <br />
        interpreted to mean “including without limitation.” Except as otherwise provided herein, these Terms are intended solely for the benefit <br />
        of the parties and are not intended to confer third-party beneficiary rights upon any other person or entity. You agree that communications <br />
        and transactions between us may be conducted electronically.<br />
        Other Terms and Policies that May Apply to You<br />
        - JellyKi Rules<br />
        - Partner Program Terms<br />
        - Membership Terms of Service<br />
        - Username Policy<br />
        - Data Privacy</p><br />
      </div>
     
      <div>
        <Footer/>
      </div>
    </div>
  )
}