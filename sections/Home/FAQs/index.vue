<template>
  <section
    class="service_provide_sec alternativeBackground"
    style="padding-bottom:90px; margin-bottom:0px"
    data-aos="fade-up"
    data-aos-duration="1500"
    id="faq"
  >
    <div class="container">
      <div class="title text-center">
        <h3>Frequently Asked Questions</h3>
        <p>Some common FAQs spanning incentives, tokens and ecosystem questions.</p>
      </div>

      <div class="d-flex">
        <div class="list-inline mx-auto justify-content-center">
          <ul
            class="nav nav-pills"
            id="pills-tab"
            role="tablist"
            style="  text-align: center;  margin: auto;"
          >
            <li class="nav-item">
              <a
                class="nav-link active show"
                id="pills-incentives-tab"
                data-toggle="pill"
                href="#pills-incentives"
                role="tab"
                aria-controls="pills-incentives"
                aria-selected="true"
              >Incentives</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="pills-payouts-tab"
                data-toggle="pill"
                href="#pills-payouts"
                role="tab"
                aria-controls="pills-payouts"
                aria-selected="false"
              >Payouts</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="pills-other-tab"
                data-toggle="pill"
                href="#pills-other"
                role="tab"
                aria-controls="pills-other"
                aria-selected="false"
              >Other</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="tab-content" id="pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="pills-incentives"
          role="tabpanel"
          aria-labelledby="pills-incentives-tab"
        >
          <div>
            <input type="checkbox" id="question1" name="q" class="questions" />
            <div class="plus">+</div>
            <label for="question1" class="question">How do incentives work?</label>
            <div class="answers">
              <p>Ribbon Incentives are made up of public health programmes that encourage and reward you for living healthier, adhering to taking your medicine and for disease suppression.</p>
            </div>
          </div>

          <div>
            <input type="checkbox" id="question2" name="q" class="questions" />
            <div class="plus">+</div>
            <label for="question2" class="question">How do I earn incentive tokens?</label>
            <div class="answers">
              <p>Do a national public health check, screening, assessments and other tasks at an accredited DoH Clinic, Hospital, Wellness Centre, Ribbon Wellness Network pharmacy and Doctors.</p>
            </div>
          </div>
          <div>
            <input type="checkbox" id="question6" name="q" class="questions" />
            <div class="plus">+</div>
            <label for="question6" class="question">How do I receive my incentive tokens?</label>
            <div class="answers">
              <p>Incentive Tokens are sent directly to your mobile phone and you can access them via a USSD code on any mobile network. USSD codes to be provided.</p>
            </div>
          </div>

          <div>
            <input type="checkbox" id="question7" name="q" class="questions" />
            <div class="plus">+</div>
            <label
              for="question7"
              class="question"
            >How long will it take for my token balance to reflect?</label>
            <div class="answers">
              <p>Incentive Tokens reflect upon completion of the health interaction, when the Care Partner captures the procedure. The Incentives app has a time limit of 2minutes maximum after interaction is completed and your balance should reflect within 15 minutes maximum.</p>
            </div>
          </div>

          <div>
            <input type="checkbox" id="question8" name="q" class="questions" />
            <div class="plus">+</div>
            <label for="question8" class="question">Where can I withdraw or spend my tokens?</label>
            <div class="answers">
              <p>You can spend your tokens on any partner stores affiliated to the Ribbon Network or withdraw peer to peer from friends, other patients and health workers with fiat cash on hand. We have affiliated Spazas tuck shops and supermarkets located at Clinics and Hospitals that will be part of the Network to withdraw tokens in cash.</p>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="pills-payouts"
          role="tabpanel"
          aria-labelledby="pills-payouts-tab"
        >
          <div>
            <input type="checkbox" id="question3" name="q" class="questions" />
            <div class="plus">+</div>
            <label for="question3" class="question">How much can I earn as a patient?</label>
            <div class="answers">
              <p>Incentivized checks, tests and tasks include:</p>
              <ul>
                <li class="payoutListItem">Informed Consent declaration - 2 DAI</li>
                <li class="payoutListItem">Surveys - 1 DAI</li>
                <li class="payoutListItem">Sign Non-smoker's declaration - 1 DAI</li>
                <li class="payoutListItem">Blood pressure - 1 DAI</li>
                <li class="payoutListItem">Blood glucose - 2 DAI</li>
                <li class="payoutListItem">Cholesterol - 1 DAI</li>
                <li class="payoutListItem">Weight assessment - 1 DAI</li>
                <li class="payoutListItem">TB - 2 DAI</li>
                <li class="payoutListItem">Pap smear - 2 DAI</li>
                <li class="payoutListItem">Mammogram - 2 DAI</li>
                <li class="payoutListItem">Prostate inspection - 2 DAI</li>
                <li class="payoutListItem">HIV test - 3 DAI for prick test & 5 DAI for blood draw</li>
                <li class="payoutListItem">Colonoscopy - 2 DAI</li>
                <li class="payoutListItem">Glaucoma screening - 1 DAI</li>
                <li class="payoutListItem">Flu vaccination - 1 DAI</li>
                <li class="payoutListItem">Blood donation - 5 DAI</li>
                <li
                  class="payoutListItem"
                >Adherence scoring - 5 DAI / milestone (excluding health check earnings)</li>
              </ul>
            </div>
          </div>

          <div>
            <input type="checkbox" id="question4" name="q" class="questions" />
            <div class="plus">+</div>
            <label for="question4" class="question">How much can I earn as a Practitioner?</label>
            <div class="answers">
              <p>Practitioners earn 10-15% depending on quality care ratings, for all Incentivized checks, tests and tasks that they presided over:</p>
              <ul>
                <li class="payoutListItem">Informed Consent declaration - 0.2 to 0.3 DAI</li>
                <li class="payoutListItem">Surveys - 0.1 to 0.15 DAI</li>
                <li class="payoutListItem">Sign Non-smoker's declaration - 0.1 to 0.15 DAI</li>
                <li class="payoutListItem">Blood pressure - 0.1 to 0.15 DAI</li>
                <li class="payoutListItem">Blood glucose - 0.2 to 0.3 DAI</li>
                <li class="payoutListItem">Cholesterol - 0.1 to 0.15 DAI</li>
                <li class="payoutListItem">Weight assessment - 0.1 to 0.15 DAI</li>
                <li class="payoutListItem">TB - 0.2 to 0.3 DAI</li>
                <li class="payoutListItem">Pap smear - 0.2 to 0.3 DAI</li>
                <li class="payoutListItem">Mammogram - 0.2 to 0.3 DAI</li>
                <li class="payoutListItem">Prostate inspection - 0.2 to 0.3 DAI</li>
                <li
                  class="payoutListItem"
                >HIV test - 0.45 DAI for prick test & 0.75 DAI for blood draw</li>
                <li class="payoutListItem">Colonoscopy - 0.2 to 0.3 DAI</li>
                <li class="payoutListItem">Glaucoma screening - 0.1 to 0.15 DAI</li>
                <li class="payoutListItem">Flu vaccination - 0.1 to 0.15 DAI</li>
                <li class="payoutListItem">Blood Donation - 0.5 to 0.75 DAI</li>
                <li
                  class="payoutListItem"
                >Adherence scoring - 0.5 to 0.75 DAI / milestone (excluding health check earnings)</li>
              </ul>
            </div>
          </div>

          <div>
            <input type="checkbox" id="question5" name="q" class="questions" />
            <div class="plus">+</div>
            <label for="question5" class="question">How much can I earn as a Ribbon Care Partner?</label>
            <div class="answers">
              <p>Ribbon Care Partners earn 15% of all Incentivized checks, tests and tasks that they presided over:</p>
              <ul>
                <li class="payoutListItem">Informed Consent declaration - 0.3 DAI</li>
                <li class="payoutListItem">Surveys - 0.15 DAI</li>
                <li class="payoutListItem">Sign Non-smoker's declaration - 0.15 DAI</li>
                <li class="payoutListItem">Blood pressure - 0.15 DAI</li>
                <li class="payoutListItem">Blood glucose - 0.3 DAI</li>
                <li class="payoutListItem">Cholesterol - 0.15 DAI</li>
                <li class="payoutListItem">Weight assessment - 0.15 DAI</li>
                <li class="payoutListItem">TB - 0.3 DAI</li>
                <li class="payoutListItem">Pap smear - 0.3 DAI</li>
                <li class="payoutListItem">Mammogram - 0.3 DAI</li>
                <li class="payoutListItem">Prostate inspection - 0.3 DAI</li>
                <li
                  class="payoutListItem"
                >HIV test - 0.45 DAI for prick test & 0.75 DAI for blood draw</li>
                <li class="payoutListItem">Colonoscopy - 0.3 DAI</li>
                <li class="payoutListItem">Glaucoma screening - 0.1 DAI</li>
                <li class="payoutListItem">Flu vaccination - 0.15 DAI</li>
                <li class="payoutListItem">Flu vaccination - 0.15 DAI</li>
                <li class="payoutListItem">Blood Donation - 0.75 DAI</li>
                <li
                  class="payoutListItem"
                >Adherence scoring - 0.75 DAI / milestone (excluding health check earnings)</li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="pills-other"
          role="tabpanel"
          aria-labelledby="pills-other-tab"
        >
          <div>
            <input type="checkbox" id="question9" name="q" class="questions" />
            <div class="plus">+</div>
            <label for="question9" class="question">How old does my child need to be to earn tokens?</label>
            <div class="answers">
              <p>Children can earn tokens from birth, and these are paid into the mother’s mobile phone number. Children above 12 years of age can earn tokens and receive them in their own mobile phone numbers, which have to be affiliated with a family member’s mobile number on the system.</p>
            </div>
          </div>
          <div>
            <input type="checkbox" id="question10" name="q" class="questions" />
            <div class="plus">+</div>
            <label for="question10" class="question">Why Ribbon Blockchain?</label>
            <div class="answers">
              <p>
                The name Ribbon blockchain is inspired by disease ribbons such as the pink ribbon for cancer, red for HIV and so on. Our knowledge of disease is that some are related and therefore should be understood in themselves individually and per relationships to be able to mitigate against them in future. Our vision, therefore, is to map out these diseases and their relationships on a blockchain that will churn out real time data analytics to enhance decision making when it comes to mitigation against disease.
                Our incentives app and data capture process is just the backbone of the blockchain we have set out to build.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>


<style  scoped>
.question {
  color: #fff;
  position: relative;
  background: #ef5178;
  margin: 0;
  padding: 10px 10px 10px 50px;
  display: block;
  width: 100%;
  cursor: pointer;
}

.answers {
  font-weight: 300;
  background: #ebf0f9;
  padding: 0px 25px;
  margin: 0px 0;
  height: 0;
  overflow: hidden;
  /* z-index: -1; */
  position: relative;
  opacity: 0;
  -webkit-transition: 0.7s ease;
  -moz-transition: 0.7s ease;
  -o-transition: 0.7s ease;
  transition: 0.7s ease;
}

.questions:checked ~ .answers {
  height: auto;
  opacity: 1;
  padding: 15px;
}

.plus {
  color: #fff;
  position: absolute;
  margin-left: 10px;
  margin-top: 5px;
  z-index: 5;
  font-size: 2em;
  line-height: 100%;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
  -webkit-transition: 0.3s ease;
  -moz-transition: 0.3s ease;
  -o-transition: 0.3s ease;
  transition: 0.3s ease;
}

.questions:checked ~ .plus {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

.questions {
  display: none;
}
.nav-link {
  font-size: 15px !important;
  color: grey;
  border-radius: 25px;
  background: rgba(239, 81, 120, 0.219);
  padding: 15px;
  margin: 5px;
  margin-bottom: 20px;
  margin-top: 0px;
}
.nav-link:active {
  color: white;
}
.nav-item .show {
  background: #ef5178 !important;
  color: white;
}
.payoutListItem {
  margin-left: 20px;
  list-style-type: disc;
}
</style>