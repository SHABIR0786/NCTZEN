import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
export default class contact extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);

    this.state = { contactModel: {} };
  }
  handleChange(e) {
    const model = this.state.contactModel;
    model[e.target.name] = e.target.value;
    this.setState({ contactModel: model });
  }
  submitForm(e) {
    e.preventDefault();
    console.log(this.state.contactModel);
  }
  render() {
    return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="faqheading">
          <h2>Frequently Asked Questions (FAQ)</h2>
        </div>
        <Accordion>
          <div className="qa_tab">
            <div className="question">
            <table>
            <tbody>
            <tr>
              <td>
                <span className="q">Q.</span>
              </td>
              <td>
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey="0"
                  className="qstmt"
                  id="how-to-send-mail-as-using-gmail"
                >
                  How to Send Mail As using Gmail?
                </Accordion.Toggle>
              </td>
              </tr>
              </tbody>
              </table>
            </div>
            <Accordion.Collapse eventKey="0">
              <div className="answer">
                  <table>
                      <tbody>
                  <tr>
                <td>
                  <span className="a">A.</span>
                </td>
                <td>
                  <div className="astmt">
                    <ol>
                      <li>
                        <p>
                          You need to have{" "}
                          <a href="https://myaccount.google.com/signinoptions/two-step-verification">
                            Gmail's Two-Factor Authentication
                          </a>{" "}
                          enabled for this to work. Visit{" "}
                          <a href="https://www.google.com/landing/2step/">
                            https://www.google.com/landing/2step/
                          </a>{" "}
                          if you do not have it enabled.
                        </p>
                      </li>
                      <li>
                        <p>
                          Once Two-Factor Authentication is enabled (or if you
                          already had it enabled), then visit{" "}
                          <a href="https://myaccount.google.com/apppasswords">
                            https://myaccount.google.com/apppasswords
                          </a>
                          .
                        </p>
                      </li>
                      <li>
                        <p>
                          When prompted for "Select the app and device you want
                          to generate the app password for":
                        </p>
                        <ul>
                          <li>
                            Select "Mail" under the drop-down for "Select app"
                          </li>
                          <li>
                            Select "Other" under the drop-down for "Select
                            device"
                          </li>
                          <li>
                            When prompted for text input, enter your custom
                            domain's email address you're forwarding from (e.g.
                            "
                            <a href="mailto:hello@example.com">
                              hello@example.com
                            </a>
                            " - this will help you keep track in case you use
                            this service for multiple accounts)
                          </li>
                        </ul>
                      </li>
                      <li>
                        <p>
                          Copy the password to your clipboard that is
                          automatically generated
                        </p>
                        <div className="alert my-3 alert-warning">
                          <i className="fa fa-exclamation-circle font-weight-bold"></i>
                          <strong className="font-weight-bold">Important:</strong>
                          <span>
                            If you are using G Suite, visit your admin panel{" "}
                            <a
                              className="alert-link"
                              href="https://admin.google.com/AdminHome#ServiceSettings/service=email&amp;subtab=filters"
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              Apps <i className="fa fa-angle-right"></i> G Suite{" "}
                              <i className="fa fa-angle-right"></i> Settings for
                              Gmail <i className="fa fa-angle-right"></i> Advanced
                              settings
                            </a>{" "}
                            and make sure to check "Allow users to send mail
                            through an external SMTP server...". There will be
                            some delay for this change to be activated, so
                            please wait a few minutes.
                          </span>
                        </div>
                      </li>
                      <li>
                        <p>
                          Go to <a href="https://gmail.com">Gmail</a> and under{" "}
                          <a href="https://mail.google.com/mail/u/0/#settings/accounts">
                            Settings <i className="fa fa-angle-right"></i> Accounts
                            and Import <i className="fa fa-angle-right"></i> Send
                            mail as
                          </a>
                          , click "Add another email address"
                        </p>
                      </li>
                      <li>
                        <p>
                          When prompted for "Name", enter the name that you want
                          your email to be seen as "From" (e.g. "Elon Musk")
                        </p>
                      </li>
                      <li>
                        <p>
                          When prompted for "Email address", enter the email
                          address with the custom domain you used above (e.g. "
                          <a href="mailto:hello@example.com">
                            hello@example.com
                          </a>
                          ")
                        </p>
                      </li>
                      <li>
                        <p>Uncheck "Treat as an alias"</p>
                        <div className="alert my-3 alert-primary">
                          <i className="fa fa-info-circle font-weight-bold"></i>
                          <strong className="font-weight-bold">Tip:</strong>
                          <span>
                            If you prefer the recipient to reply directly to
                            your Gmail address, then leave this checked. To
                            learn more,{" "}
                            <a
                              className="alert-link"
                              href="https://support.google.com/a/answer/1710338"
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              follow these instructions by Gmail
                            </a>{" "}
                            on this topic.
                          </span>
                        </div>
                      </li>
                      <li>
                        <p>Click "Next Step" to proceed</p>
                      </li>
                      <li>
                        <p>
                          When prompted for "SMTP Server", enter{" "}
                          <code>smtp.gmail.com</code> and leave the port as{" "}
                          <code>587</code>
                        </p>
                      </li>
                      <li>
                        <p>
                          When prompted for "Username", enter the portion of
                          your Gmail address without the{" "}
                          <span>
                            <a href="http://gmail.com">gmail.com</a>
                          </span>{" "}
                          part (e.g. just "user" if my email is{" "}
                          <span>
                            <a href="mailto:user@gmail.com">user@gmail.com</a>
                          </span>
                          )
                        </p>
                        <div className="alert my-3 alert-primary">
                          <i className="fa fa-info-circle font-weight-bold"></i>
                          <strong className="font-weight-bold">Important:</strong>
                          <span>
                            If the "Username" portion is autofilled, then{" "}
                            <u>
                              <strong>you will need to change this</strong>
                            </u>{" "}
                            to the username portion of your Gmail address
                            instead.
                          </span>
                        </div>
                      </li>
                      <li>
                        <p>
                          When prompted for "Password", paste from your
                          clipboard the password you generated in step 2 above
                        </p>
                      </li>
                      <li>
                        <p>
                          Leave the radio button checked to "Secured connection
                          using TLS"
                        </p>
                      </li>
                      <li>
                        <p>Click "Add Account" to proceed</p>
                      </li>
                      <li>
                        <p>
                          Open a new tab to{" "}
                          <a href="https://gmail.com">Gmail</a> and wait for
                          your verification email to arrive (you will receive a
                          verification code that confirms you are the owner of
                          the email address you are attempting to "Send Mail
                          As")
                        </p>
                      </li>
                      <li>
                        <p>
                          Once it arrives, copy and paste the verification code
                          at the prompt you received in the previous step
                        </p>
                      </li>
                      <li>
                        <p>
                          Once you've done that, go back to the email and click
                          the link to "confirm the request". You need to do this
                          step and the previous step for the email to be
                          correctly configured.
                        </p>
                      </li>
                    </ol>
                  </div>
                </td>
                </tr>
                </tbody>
                </table>
              </div>
            </Accordion.Collapse>
          </div>
           <div className="qa_tab">
            <div className="question">
                <table>
                    <tbody>
                        <tr>
              <td>
                <span className="q">Q.</span>
              </td>
              <td>
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey="1"
                  className="qstmt"
                >
                  Why am I not receiving my test emails?
                </Accordion.Toggle>
              </td>
              </tr>
                    </tbody>
                </table>
            </div>
            <Accordion.Collapse eventKey="1">
              <div className="answer">
              <table>
                    <tbody>
                        <tr>
                <td>
                  <span className="a">A.</span>
                </td>
                <td>
                  <div className="astmt">
                    <p>
                      If you're sending a test email to yourself using the "Send
                      Mail As" feature, then it will not show up in your inbox
                      due to{" "}
                      <a href="https://support.google.com/a/answer/1703601">
                        this widely known official Gmail answer
                      </a>
                      .
                    </p>
                    <p>
                      If you continue to have issues, then it is most likely to
                      be an issue with DNS propagation. You will need to wait a
                      bit longer and try again (or try setting a lower TTL value
                      on your TXT records).
                    </p>
                    <p>
                      <strong>Still having issues?</strong> Please file a{" "}
                      <a href="/contact">Help request</a> so we can help
                      investigate the issue and find a quick resolution.
                    </p>
                  </div>
                </td>
                </tr>
                    </tbody>
                </table>
              </div>
            </Accordion.Collapse>
          </div>

          <div className="qa_tab">
            <div className="question">
            <table>
                    <tbody>
                        <tr>
              <td>
                <span className="q">Q.</span>
              </td>
              <td>
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey="2"
                  className="qstmt"
                >
                  Why are my test emails sent to myself in Gmail showing as
                  "suspicious"?
                </Accordion.Toggle>
              </td>
              </tr>
                    </tbody>
                </table>
            </div>
            <Accordion.Collapse eventKey="2">
              <div className="answer">
              <table>
                    <tbody>
                        <tr>
                <td>
                  <span className="a">A.</span>
                </td>
                <td>
                  <div className="astmt">
                    <p>
                      If you see this error message in Gmail when you send a
                      test to yourself, or when a person you're emailing with
                      your alias sees an email from you for the first time, then{" "}
                      <strong>please do not worry</strong> – as this is a
                      built-in safety feature of Gmail.
                    </p>
                    <p>
                      You can simply click "Looks safe". For example, if you
                      were to send a test message using the send mail as feature
                      (to someone else), then they will not see this message.
                    </p>
                    <p>
                      However if they do see this message, it's because they
                      were normally used to seeing your emails come from{" "}
                      <a href="mailto:john@gmail.com">john@gmail.com</a> instead
                      of{" "}
                      <a href="mailto:john@customdomain.com">
                        john@customdomain.com
                      </a>{" "}
                      (just an example). Gmail will alert the users just to make
                      sure things are safe just in case, there is no workaround.
                    </p>
                  </div>
                </td>
                </tr>
                    </tbody>
                </table>
              </div>
            </Accordion.Collapse>
          </div>

          <div className="qa_tab">
            <div className="question">
            <table>
                    <tbody>
                        <tr>
              <td>
                <span className="q">Q.</span>
              </td>
              <td>
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey="3"
                  className="qstmt"
                >
                  Can I remove the via forwardemail dot net in Gmail?
                </Accordion.Toggle>
              </td>
              </tr>
                    </tbody>
                </table>
            </div>
            <Accordion.Collapse eventKey="3">
              <div className="answer">
              <table>
                    <tbody>
                        <tr>
                <td>
                  <span className="a">A.</span>
                </td>
                <td>
                  <div className="astmt">
                    <p>
                      This is ONLY applicable if you are using the{" "}
                      <a href="#how-to-send-mail-as-using-gmail">
                        How to Send Mail As using Gmail
                      </a>{" "}
                      feature. Currently there is no workaround for this, and it
                      affects all service providers (not just us). The
                      workaround is to use a custom SMTP server. However we do
                      not offer SMTP yet.
                    </p>
                    <p>
                      We plan to release our very own SMTP service (not just
                      forwarding, but email in general), which would alleviate
                      this. Gmail automatically adds this and there is no
                      current workaround. Other email forwarding services with
                      similar features to ours will still incur this same issue
                      too (and other email forwarding solutions simply do not
                      offer the level of privacy we do).
                    </p>
                    <p>
                      If you want to get notified when this is released, you can
                      email{" "}
                      <a href="mailto:smtp@forwardemail.net">
                        smtp@forwardemail.net
                      </a>{" "}
                      and we'll send you a notification once it's released. Or
                      just sign up for an account here if you haven't already!
                    </p>
                  </div>
                </td>
                </tr>
                    </tbody>
                </table>
              </div>
            </Accordion.Collapse>
          </div>

          <div className="qa_tab">
            <div className="question">
            <table>
                    <tbody>
                        <tr>
              <td>
                <span className="q">Q.</span>
              </td>
              <td>
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey="4"
                  className="qstmt"
                >
                  What is the max email size limit?
                </Accordion.Toggle>
              </td>
              </tr>
                    </tbody>
                </table>
            </div>
            <Accordion.Collapse eventKey="4">
              <div className="answer">
              <table>
                    <tbody>
                        <tr>
                <td>
                  <span className="a">A.</span>
                </td>
                <td>
                  <div className="astmt">
                    <p>
                      We default to a 50MB size limit, which includes content,
                      headers, and attachments. Note that services such as Gmail
                      and Outlook allow only 25MB size limit, and if you exceed
                      the limit when sending to addresses at those providers you
                      will receive an error message.
                    </p>
                    <p>
                      An error with the proper response code is returned if the
                      file size limit is exceeded.
                    </p>
                  </div>
                </td>
                </tr>
                    </tbody>
                </table>
              </div>
            </Accordion.Collapse>
          </div>

          <div className="qa_tab">
            <div className="question">
            <table>
                    <tbody>
                        <tr>
              <td>
                <span className="q">Q.</span>
              </td>
              <td>
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey="5"
                  className="qstmt"
                >
                  Do you store emails and their contents?
                </Accordion.Toggle>
              </td>
              </tr>
                    </tbody>
                </table>
            </div>
            <Accordion.Collapse eventKey="5">
              <div className="answer">
              <table>
                    <tbody>
                        <tr>
                <td>
                  <span className="a">A.</span>
                </td>
                <td>
                  <div className="astmt">
                    <p>
                      No, absolutely not. See our{" "}
                      <a href="#privacypolicy">Privacy Policy</a>.
                    </p>
                  </div>
                </td>
                </tr>
                    </tbody>
                </table>
              </div>
            </Accordion.Collapse>
          </div>

          <div className="qa_tab">
            <div className="question">
            <table>
                    <tbody>
                        <tr>
              <td>
                <span className="q">Q.</span>
              </td>
              <td>
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey="6"
                  className="qstmt"
                >
                  Do you store logs of emails?
                </Accordion.Toggle>
              </td>
              </tr>
                    </tbody>
                </table>
            </div>
            <Accordion.Collapse eventKey="6">
              <div className="answer">
              <table>
                    <tbody>
                        <tr>
                <td>
                  <span className="a">A.</span>
                </td>
                <td>
                  <div className="astmt">
                    <p>
                      No, absolutely not. See our{" "}
                      <a href="#privacypolicy">Privacy Policy</a>.
                    </p>
                  </div>
                </td>
                </tr>
                    </tbody>
                </table>
              </div>
            </Accordion.Collapse>
          </div>

          <div className="qa_tab">
            <div className="question">
            <table>
                    <tbody>
                        <tr>
              <td>
                <span className="q">Q.</span>
              </td>
              <td>
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey="7"
                  className="qstmt"
                >
                  Do you read my emails?
                </Accordion.Toggle>
              </td>
              </tr>
                    </tbody>
                </table>
            </div>
            <Accordion.Collapse eventKey="7">
              <div className="answer">
              <table>
                    <tbody>
                        <tr>
                <td>
                  <span className="a">A.</span>
                </td>
                <td>
                  <div className="astmt">
                    <p>
                      No, absolutely not. We do not store logs. See our{" "}
                      <a href="#privacypolicy">Privacy Policy</a>.
                    </p>
                    <p>
                      Many other email forwarding services unethically read your
                      email. This is not in alignment with our principles and
                      philosophy on software.
                    </p>
                    <p>
                      We believe you should have a right to privacy and we
                      strictly respect it.
                    </p>
                    <p>
                      The code that is deployed to the server is{" "}
                      <a href="https://github.com/forwardemail">
                        open-source software on GitHub
                      </a>{" "}
                      for transparency and to build trust.
                    </p>
                  </div>
                </td>
                </tr>
                    </tbody>
                </table>
              </div>
            </Accordion.Collapse>
          </div>

          <div className="qa_tab">
            <div className="question">
            <table>
                    <tbody>
                        <tr>
              <td>
                <span className="q">Q.</span>
              </td>
              <td>
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey="8"
                  className="qstmt"
                >
                  How do you prevent spammers and ensure good email forwarding
                  reputation?
                </Accordion.Toggle>
              </td>
              </tr>
                    </tbody>
                </table>
            </div>
            <Accordion.Collapse eventKey="8">
              <div className="answer">
              <table>
                    <tbody>
                        <tr>
                <td>
                  <span className="a">A.</span>
                </td>
                <td>
                  <div className="astmt">
                    <p>
                      Per documentation and suggestions from Google at{" "}
                      <a href="https://support.google.com/a/answer/175365?hl=en">
                        https://support.google.com/a/answer/175365?hl=en
                      </a>
                      , along with best practice, including:
                    </p>
                    <ol>
                      <li>
                        <p>
                          <strong>DNS Blacklists:</strong> we test senders IP's
                          against the Spamhaus{" "}
                          <a href="https://en.wikipedia.org/wiki/Domain_Name_System-based_Blackhole_List">
                            DNS blacklists
                          </a>
                          , if any fail, then the sender is not permitted to
                          send the message and is returned a detailed error
                          message with instructions on how to de-list themselves
                          from the specific blacklists they're listed under.
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>Anti-Spam and Anti-Phishing Scanner</strong>:
                          we built from scratch and use{" "}
                          <a href="https://github.com/spamscanner/spamscanner">
                            Spam Scanner
                          </a>{" "}
                          for anti-spam prevention (it uses a Naive Bayes
                          classifier under the hood). We built this because we
                          were not happy with{" "}
                          <a href="https://www.rspamd.com/">rspamd</a> nor{" "}
                          <a href="https://spamassassin.apache.org/">
                            SpamAssassin
                          </a>
                          , nor were we happy with their lack of privacy-focused
                          policies and public corpus datasets. Spam Scanner
                          checks a message for spam, phishing, executables,
                          viruses, and more, while completely respecting your
                          privacy.
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>SPF and DKIM:</strong> through checking if an
                          SPF record exists for a sender, and if so, we
                          reverse-lookup the SMTP connection's remote address to
                          validate it matches the SPF record, otherwise it's
                          rejected. If an SPF record does not exist, then we
                          require DKIM verification. If DKIM headers are passed
                          and fail, then it is rejected as well. If no DKIM
                          headers are passed, then we assume that DKIM
                          validation passes.
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>MX Record Test:</strong> through checking if
                          the sender's from address domain has MX records (so
                          it's actually coming from a mail exchange/SMTP
                          server), otherwise it's rejected.
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>Fully Qualified Domain Name Test:</strong>{" "}
                          validates that senders SMTP connections are from a
                          fully qualified domain name ("FQDN"), meaning no IP
                          addresses, they must have a valid domain name
                          resolved.
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>TXT Record Test:</strong> through checking if
                          the email address the sender is trying to send to has
                          a TXT DNS record with a valid email forwarding setup.
                          The SSL certificates (main domain name or alternative
                          names) of all MX servers of the forwarding destination
                          must match the MX entry.
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>ARC:</strong> we use the{" "}
                          <a href="https://en.wikipedia.org/wiki/Email_authentication#Authentication-Results">
                            Authentication-Results
                          </a>{" "}
                          header and validate it against the sending domain's
                          DMARC policy.
                        </p>
                      </li>
                    </ol>
                  </div>
                </td>
                </tr>
                    </tbody>
                </table>
              </div>
            </Accordion.Collapse>
          </div>

          <div className="qa_tab">
            <div className="question">
            <table>
                    <tbody>
                        <tr>
              <td>
                <span className="q">Q.</span>
              </td>
              <td>
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey="9"
                  className="qstmt"
                >
                  Can I "send mail as" in Gmail with this?
                </Accordion.Toggle>
              </td>
              </tr>
                    </tbody>
                </table>
            </div>
            <Accordion.Collapse eventKey="9">
              <div className="answer">
              <table>
                    <tbody>
                        <tr>
                <td>
                  <span className="a">A.</span>
                </td>
                <td>
                  <div className="astmt">
                    <p>
                      Yes! As of October 2, 2018 we have added this feature. See{" "}
                      <a href="#how-to-send-mail-as-using-gmail">
                        How to Send Mail As using Gmail
                      </a>{" "}
                      above!
                    </p>
                  </div>
                </td>
                </tr>
                    </tbody>
                </table>
              </div>
            </Accordion.Collapse>
          </div>

          <div className="qa_tab">
            <div className="question">
            <table>
                    <tbody>
                        <tr>
              <td>
                <span className="q">Q.</span>
              </td>
              <td>
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey="10"
                  className="qstmt"
                >
                  Can I "send mail as" in Outlook with this?
                </Accordion.Toggle>
              </td>
              </tr>
                    </tbody>
                </table>
            </div>
            <Accordion.Collapse eventKey="10">
              <div className="answer">
              <table>
                    <tbody>
                        <tr>
                <td>
                  <span className="a">A.</span>
                </td>
                <td>
                  <div className="astmt">
                    <p>
                      Yes! As of October 2, 2018 we have added this feature.
                      Simply view these two links from Microsoft below:
                    </p>
                    <ul>
                      <li>
                        <a href="https://support.office.com/en-us/article/add-or-remove-an-email-alias-in-outlook-com-459b1989-356d-40fa-a689-8f285b13f1f2">
                          https://support.office.com/en-us/article/add-or-remove-an-email-alias-in-outlook-com-459b1989-356d-40fa-a689-8f285b13f1f2
                        </a>
                      </li>
                      <li>
                        <a href="https://support.office.com/en-us/article/send-email-from-a-different-address-in-outlook-com-ccba89cb-141c-4a36-8c56-6d16a8556d2e">
                          https://support.office.com/en-us/article/send-email-from-a-different-address-in-outlook-com-ccba89cb-141c-4a36-8c56-6d16a8556d2e
                        </a>
                      </li>
                    </ul>
                    <p>
                      You should also set the SPF record for Outlook in your DNS
                      configuration TXT record.
                    </p>

                    <div className="alert my-3 alert-warning">
                      <i className="fa fa-exclamation-circle font-weight-bold"></i>
                      <strong className="font-weight-bold">Important:</strong>
                      <span>
                        If you are using Microsoft Outlook or Live.com, you'll
                        need to append{" "}
                        <code>include:spf.protection.outlook.com</code> to your
                        SPF TXT record, for example:
                        <br></br>
                        <code
                          data-original-title=""
                          title=""
                          aria-describedby="tooltip429478"
                        >
                          v=spf1 a mx include:spf.forwardemail.net
                          include:spf.protection.outlook.com -all
                        </code>
                      </span>
                    </div>
                  </div>
                </td>
                </tr>
                    </tbody>
                </table>
              </div>
            </Accordion.Collapse>
          </div>

          <div className="qa_tab">
            <div className="question">
            <table>
                    <tbody>
                        <tr>
              <td>
                <span className="q">Q.</span>
              </td>
              <td>
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey="11"
                  className="qstmt"
                >
                  Can I "send mail as" in Apple Mail and iCloud Mail with this?
                </Accordion.Toggle>
              </td>
              </tr>
                    </tbody>
                </table>
            </div>
            <Accordion.Collapse eventKey="11">
              <div className="answer">
              <table>
                    <tbody>
                        <tr>
                <td>
                  <span className="a">A.</span>
                </td>
                <td>
                  <div className="astmt">
                    <p>
                      Unfortunately Apple does not allow this, regardless of
                      which service you use. However you can use the Mail app
                      along with your domain's email account.
                    </p>
                    <ul>
                      <li>
                        <a href="https://discussions.apple.com/thread/8316291">
                          https://discussions.apple.com/thread/8316291
                        </a>
                      </li>
                      <li>
                        <a href="https://discussions.apple.com/thread/6876839">
                          https://discussions.apple.com/thread/6876839
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
                </tr>
                    </tbody>
                </table>
              </div>
            </Accordion.Collapse>
          </div>

          <div className="qa_tab">
            <div className="question">
            <table>
                    <tbody>
                        <tr>
              <td>
                <span className="q">Q.</span>
              </td>
              <td>
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey="13"
                  className="qstmt"
                >
                  Can I forward unlimited emails with this?
                </Accordion.Toggle>
              </td>
              </tr>
                    </tbody>
                </table>
            </div>
            <Accordion.Collapse eventKey="13">
              <div className="answer">
              <table>
                    <tbody>
                        <tr>
                <td>
                  <span className="a">A.</span>
                </td>
                <td>
                  <div className="astmt">
                    <p>
                      Practically yes - the only current restriction is that
                      senders <strong>by unique email address</strong> are
                      limited to sending (300) emails per hour through the
                      system.
                    </p>
                    <p>
                      If this limit is exceeded we send a "451" response code
                      which tells the senders mail server to retry later.
                    </p>
                  </div>
                </td>
                </tr>
                    </tbody>
                </table>
              </div>
            </Accordion.Collapse>
          </div>

          <div className="qa_tab" id="privacypolicy"> 
            <div className="question">
            <table>
                    <tbody>
                        <tr>
              <td>
                <span className="q">Q.</span>
              </td>
              <td>
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey="12"
                  className="qstmt"
                >
                  Privacy Policy
                </Accordion.Toggle>
              </td>
              </tr>
                    </tbody>
                </table>
            </div>
            <Accordion.Collapse eventKey="12">
              <div className="answer">
              <table>
                    <tbody>
                        <tr>
                <td>
                  <span className="a">A.</span>
                </td>
                <td>
                  <div className="astmt">
                    <h2>
                      <a
                        className="anchor"
                        href="#information-not-collected"
                        aria-hidden="true"
                        id="information-not-collected"
                      >
                        <svg
                          aria-hidden="true"
                          className="octicon octicon-link"
                          height="16"
                          version="1.1"
                          viewBox="0 0 16 16"
                          width="16"
                        >
                          <path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
                        </svg>
                      </a>
                      Information Not Collected
                    </h2>
                    <ul>
                      <li>We do not store any emails.</li>
                      <li>We do not store any metadata about emails.</li>
                      <li>We do not store any logs.</li>
                      <li>We do not store any IP addresses.</li>
                      <li>We do not store any browser information.</li>
                    </ul>
                    <h2>
                      <a
                        className="anchor"
                        href="#information-collected"
                        aria-hidden="true"
                        id="information-collected"
                      >
                        <svg
                          aria-hidden="true"
                          className="octicon octicon-link"
                          height="16"
                          version="1.1"
                          viewBox="0 0 16 16"
                          width="16"
                        >
                          <path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
                        </svg>
                      </a>
                      Information Collected
                    </h2>
                    <p>
                      For transparency, at any time you can{" "}
                      <a
                        href="https://github.com/forwardemail"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        view our source code
                      </a>{" "}
                      to see how the information below is collected and used:
                    </p>
                    <ul>
                      <li>
                        We store a cookie in a session for your visit (strictly
                        for functionality). This cookie is stored securely in
                        our Redis database.
                      </li>
                      <li>
                        We store your email address (strictly for
                        functionality). This email address is stored securely in
                        our MongoDB database.
                      </li>
                      <li>
                        We store your domain name(s) and alias(es) you create
                        (strictly for functionality). This information is stored
                        securely in our MongoDB database.
                      </li>
                      <li>
                        Any additional information you voluntarily provide us,
                        such as comments or questions in a{" "}
                        <a href="/contact">Help request</a>.
                      </li>
                    </ul>
                    <h2>
                      <a
                        className="anchor"
                        href="#information-shared"
                        aria-hidden="true"
                        id="information-shared"
                      >
                        <svg
                          aria-hidden="true"
                          className="octicon octicon-link"
                          height="16"
                          version="1.1"
                          viewBox="0 0 16 16"
                          width="16"
                        >
                          <path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
                        </svg>
                      </a>
                      Information Shared
                    </h2>
                    <p>
                      We do not share your information with any third-party
                      whatsoever (with the exception of{" "}
                      <a
                        href="https://postmarkapp.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Postmark
                      </a>
                      , which we use for transactional emails, e.g. for account
                      verification or password reset emails).
                    </p>
                    <p>
                      We may need to and will comply with court ordered legal
                      requests (but keep in mind we do not collect information
                      mentioned above, so we will not be able to provide it to
                      begin with).
                    </p>
                  </div>
                </td>
                </tr>
                    </tbody>
                </table>
              </div>
            </Accordion.Collapse>
          </div>

        </Accordion>
      </div>
      </React.Fragment>
    );
  }
}
