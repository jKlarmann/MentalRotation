// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

    * More about the properties and functions of the wrapping views - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#wrapping-views

*/

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
  text: `<br />
            <br />
            Thank you for taking the time to participate in our experiment.
            <br />
            <br />

            `,
  buttonText: 'begin the experiment'
});

// For most tasks, you need instructions views
const instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions',
  title: 'General Instructions',
  text: `In the following you will be presented two pictures. They both show an object made out of several <strong>building-blocks</strong>.
          They will be <strong>oriented in space</strong> differently and it is your task to decide, if they are the same, by pressing the corresponding
          key on your keyboard.
          <br />
          <br />
          <strong>d</strong> = same
          <br />
          <strong>k</strong> = different
          <br />
          <br />
          You will first be presented with twelve practice trials, to get comfortable with the design. Afterwards you will be presented with the main trials.
          <br />
          <br />          
          Please answer as fast and accurate as possible.`,
  buttonText: 'go to practice trials'
});

const transition_screen = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'isnstructions',
  title: 'Amazing!',
  text: 'You have finished the practice and can now proceed to the main trials. <br/><br/> Remember: <br/><br/> <strong>d</strong> = same <br /> <strong>k</strong> = different<br /><br /> Good Luck! <br />',
  buttonText: 'go to trials'
});


// In the post test questionnaire you can ask your participants addtional questions
const post_test = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Additional information',
  text: 'Answering the following questions is optional, but your answers will help us analyze our results.'

  // You can change much of what appears here, e.g., to present it in a different language, as follows:
  // buttonText: 'Weiter',
  // age_question: 'Alter',
  // gender_question: 'Geschlecht',
  // gender_male: 'm??nnlich',
  // gender_female: 'weiblich',
  // gender_other: 'divers',
  // edu_question: 'H??chster Bildungsabschluss',
  // edu_graduated_high_school: 'Abitur',
  // edu_graduated_college: 'Hochschulabschluss',
  // edu_higher_degree: 'Universit??rer Abschluss',
  // languages_question: 'Muttersprache',
  // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
  // comments_question: 'Weitere Kommentare'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'thanks',
  title: 'Thank you for taking part in this experiment!',
  prolificConfirmText: 'Press the button'
});

/** trial (magpie's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _magpie (e.g. for use with a progress bar)
            and the name of the trial as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
      More about trial life cycle - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

    - hook: object - option to hook and add custom functions to the view
      More about hooks - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

* All about the properties of trial views
* https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#trial-views
*/
const key_press_trials = magpieViews.view_generator("key_press", {
  trials: trial_info.key_press_trials.length,
        name: 'key_press_trials',
        data: _.shuffle(trial_info.key_press_trials),
        pause: 250
});

const practice_trials = magpieViews.view_generator("key_press",
{
  trials: trial_info.practice_trials.length,
        name: 'key_press_trials',
        data: _.shuffle(trial_info.key_press_trials),
        pause: 250
});




// There are many more templates available:
// forced_choice, slider_rating, dropdown_choice, testbox_input, rating_scale, image_selection, sentence_choice,
// key_press, self_paced_reading and self_paced_reading_rating_scale
