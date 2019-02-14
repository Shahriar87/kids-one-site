import PropTypes from 'prop-types';
import React from 'react';

const localStyles = {
  wrapper: {
    backfaceVisibility: 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    transform: 'rotateY(180deg)',
    width: '100%',
  },
  inputWrapper: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsWrapper: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 344,
    height: 40,
    margin: '15px 0',
    display: 'block',
  },
  recoverPassword: {
    width: '100%',
    textAlign: 'center',
  },
  button: {
    margin: '0 15px',
    padding: 15,
  },
  select: {
    display: 'block',
  }
};

const Signup = ({
  handleShowLogin,
  styles,
  handleSignup,
  handleChange,
  username,
  password,
  passwordConfirmation,
  profilePic,
  usernameCustomLabel,
  passwordCustomLabel,
  passwordConfirmationCustomLabel,
  goToLoginCustomLabel,
  submitSignupCustomLabel,
}) => (
    <section id="signup-form" style={Object.assign({}, localStyles.wrapper, styles.wrapper)}>
      <div id="fields" style={Object.assign({}, localStyles.inputWrapper, styles.inputWrapper)}>
        <input
          style={Object.assign({}, localStyles.input, styles.input)}
          type="username"
          id="username"
          name="username"
          placeholder={usernameCustomLabel}
          onChange={e => handleChange(e.target.name, e.target.value)}
          value={username}
        />
        <input
          style={Object.assign({}, localStyles.input, styles.input)}
          type="password"
          id="password"
          name="password"
          placeholder={passwordCustomLabel}
          onChange={e => handleChange(e.target.name, e.target.value)}
          value={password}
        />
        <input
          style={Object.assign({}, localStyles.input, styles.input)}
          type="password"
          id="passwordConfirmation"
          name="passwordConfirmation"
          placeholder={passwordConfirmationCustomLabel}
          onChange={e => handleChange(e.target.name, e.target.value)}
          value={passwordConfirmation}
        />
        <select
          style={Object.assign({}, localStyles.select, styles.select)}
          type="text"
          id="profilePic"
          name="profilePic"
          onChange={e => handleChange(e.target.name, e.target.value)}
          value={profilePic}
        >
          <option value="">Select a character</option>
          <option value="Images/bitmoji/Shah.jpg">Shah</option>
          <option value="Images/bitmoji/stephen.png">Stephen</option>
          <option value="Images/bitmoji/Dante.jpg">Dante</option>
          <option value="Images/bitmoji/Xavier.jpg">Xavier</option>
          <option value="Images/bitmoji/Chanda.png">Chanda</option>
          <option value="Images/bitmoji/Paul.png">Paul</option>
          <option value="Images/bitmoji/Adreena.jpg">Adreena</option>
          <option value="Images/bitmoji/Alex.jpg">Alex</option>
          <option value="Images/bitmoji/Bruce.jpg">Bruce</option>
          <option value="Images/bitmoji/Carlos.jpg">Carlos</option>
          <option value="Images/bitmoji/Conner.png">Conner</option>
          <option value="Images/bitmoji/Eric.png">Eric</option>
          <option value="Images/bitmoji/Hasan.jpg">Hasan</option>
          <option value="Images/bitmoji/Ingrid.jpg">Ingrid</option>
          <option value="Images/bitmoji/Josh.png">Josh</option>
          <option value="Images/bitmoji/Julio.png">Julio</option>
          <option value="Images/bitmoji/Justin.png">Justin</option>
          <option value="Images/bitmoji/Kyle.jpg">Kyle</option>
          <option value="Images/bitmoji/Mary.jpg">Mary</option>
          <option value="Images/bitmoji/Max.png">Max</option>
          <option value="Images/bitmoji/Netreia.png">Netreia</option>
          <option value="Images/bitmoji/Niko.png">Niko</option>
          <option value="Images/bitmoji/Salavatore.jpg">Sal</option>
          <option value="Images/bitmoji/Taylor.png">Taylor</option>
          <option value="Images/bitmoji/Tyler.jpg">Tyler</option>
          <option value="Images/bitmoji/Yan.png">Yan</option>
        </select>
      </div>
      <br />
      <div style={Object.assign({}, localStyles.buttonsWrapper, styles.buttonsWrapper)}>
        <button
          className="btn btn-lg outline authButton"
          id="login-button"
          type="button"
          // style={Object.assign({}, localStyles.button, styles.button)}
          onClick={() => {
            handleShowLogin('isLogin', true);
          }}
        >
          {goToLoginCustomLabel}
        </button>
        <input
          className="btn btn-lg outline authButton"
          id="submit-signup"
          type="submit"
          value={submitSignupCustomLabel}
          style={Object.assign({}, localStyles.button, styles.button)}
          onClick={handleSignup}
        />
      </div>
    </section>
  );

Signup.propTypes = {
  handleShowLogin: PropTypes.func.isRequired,
  handleSignup: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  passwordConfirmation: PropTypes.string.isRequired,
  profilePic: PropTypes.string.isRequired,
  styles: PropTypes.shape({
    wrapper: PropTypes.object,
    inputWrapper: PropTypes.object,
    buttonsWrapper: PropTypes.object,
    input: PropTypes.object,
    recoverPassword: PropTypes.object,
    button: PropTypes.object,
  }),
  usernameCustomLabel: PropTypes.string.isRequired,
  passwordCustomLabel: PropTypes.string.isRequired,
  passwordConfirmationCustomLabel: PropTypes.string.isRequired,
  goToLoginCustomLabel: PropTypes.string.isRequired,
  submitSignupCustomLabel: PropTypes.string.isRequired,
};

Signup.defaultProps = {
  styles: {},
};

export default Signup;
