![Alt text](/assets/images/image.png)


# 🧮 SIMPLE MATH

**SIMPLE MATH** is a clean, browser-based calculator designed to help users perform everyday math operations with ease. Whether you're a student, professional, or just someone who needs quick calculations, this tool is for you. Built entirely with HTML, CSS, and vanilla JavaScript, SIMPLE MATH offers a user-friendly interface and responsive design for all screen sizes.

The purpose of this project is to demonstrate how pure JavaScript can be used to build interactive, real-world applications. SIMPLE MATH is ideal for those who want a fast and reliable calculator without the need to install apps or rely on complex software.



---

## 🚀 Features

### ✅ **Basic Math Operations**
- Supports addition (`+`), subtraction (`-`), multiplication (`*`), and division (`/`).
- Easy-to-use interface with clickable number and operator buttons.

![Alt text](/assets/images/simpleOperations.png)

### 🧮 **Brackets Support**
- Add parentheses to control the order of operations.
- Helps with solving complex expressions accurately.

![Alt text](/assets/images/brackets.png)

### 🟰 **Equals Button**
- Instantly evaluates the entered expression and shows the result.

![Alt text](/assets/images/equals.png)

### 🔙 **Backspace ("--")**
- Removes the last digit or operator entered.
- Useful for quick corrections.

![Alt text](/assets/images/backspace.png)

### 🧼 **Clear ("c")**
- Clears the current input and resets the calculator.

![alt text](/assets/images/erase.png)

### 🔢 **Decimal Support**
- Allows entry of decimal numbers with the dot (`.`) button.
- Prevents multiple decimal points in a single number.

![alt text](/assets/images/decimal.png)

### 🧠 **Scientific Functions**
- `x²`: Squares the current number.
- `√x`: Calculates the square root of the current number.

![alt text](/assets/images/scientific.png)

### 📱 **Responsive Design**
- Fully functional on desktops, tablets, and smartphones.
- Clean layout adjusts to screen size automatically.

## Technologies Used

Here’s a list of the core technologies used to build the **Simple Math** website:

**Frontend:**

● **HTML5** – Used to structure the content and create the overall layout of the website.

● **CSS** – Responsible for styling the website and ensuring it looks visually appealing.
● **Flexbox** – Used for responsive layout and ensuring the design adapts to different
screen sizes.

● **JavaScript** – Powers the interactive functionality of the calculator, handles user inputs, updates the display, processes mathematical operations, and manages expression evaluation dynamically in real time.
● **Media Queries** – Employed to handle responsiveness across various devices
(desktop, tablet, mobile).

**Version Control:**

● **Git** – Used for version control to track and manage changes in the project.

● **GitHub** – Hosted the code repository and provides a platform for collaboration and version
history.

**Hosting & Deployment:**

● **GitHub Pages** – Used for free static website hosting, allowing easy deployment of the
TrainBrain website directly from the GitHub repository.


## 👥 Target Audience

- Students solving math problems.
- Users needing a lightweight, fast calculator.
- Beginner developers learning about DOM manipulation, event handling, and basic JavaScript logic.

---

## 💡 How to Use

1. Open `index.html` in your browser.
2. Click buttons to enter numbers and operations.
3. Press `=` to see the result.
4. Use `c` to clear or `--` to backspace.
5. Try the square or square root buttons for advanced functions.

---

🎯 **SIMPLE MATH** is a great example of how to apply JavaScript to build practical, minimal tools that are both functional and fun to use.

## Testing
**Methods**

**Validation**: 

HTML has been validated with the W3C HTML5 Validator.

![Alt text](/assets/images/validationHtml.png)

CSS has been validated with the W3C CSS Validator and auto-prefixed using **CSSAutoprefixer**.

![Alt text](/assets/images/cssValidator.png)

Accessibility was tested with DevTools Lighthouse:

![Alt text](/assets/images/accessibility.png)

**General Testing**

● I tested it in different browsers Safari, Google Chrome.

● I made sure the website's responsiveness

● All the website's sections are readable and easy to understand

## Bugs

**Fixed bugs**

● Fixed expression evaluation errors: Initially, some mathematical expressions with brackets or multiple operators caused syntax errors. Logic was added to handle brackets and ensure valid input structure before calculation.

● Decimal point handling: The decimal (comma) button allowed multiple dots in a single number, which caused invalid calculations. A condition was added to prevent more than one dot in the same number.

● Backspace bug: Pressing backspace when no number was being entered caused unexpected behavior or crashes. This was fixed by checking if createdNumber exists before slicing.

**Unfixed bugs**

None

## Deployment

● The site was developed to GitHub pages. The steps to deploy are as follows.

● In the Github repository navigate to the settings tab.

● From the source section drop-down menu, select the Master Branch.

● Once the master branch has been selected, the page provided the link to the completed
website.

The Link is here [Simple Math](https://vladislav123-hue.github.io/Project2/)

## Credits

**Media**

The background picture has been taken from the following website: [Math](https://career.uconn.edu/blog/2019/09/11/math-careers-in-unlikely-places/)
