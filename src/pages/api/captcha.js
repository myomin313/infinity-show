import svgCaptcha from 'svg-captcha';

let captchaText = '';

export default function handler(req, res) {
  if (req.method === 'GET') {
    const captcha = svgCaptcha.create();
    captchaText = captcha.text;
    res.status(200).json({ data: captcha.data });
  } else if (req.method === 'POST') {
    const { userInput } = req.body;
    const isCorrect = userInput === captchaText;
    res.status(200).json({ success: isCorrect });
  } else {
    res.status(405).end();
  }
}
