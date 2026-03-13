<?php
// Replace with your real receiving email address
$receiving_email_address = 'info@blueidealteck.com';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Sanitization
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $name = isset($_POST['name']) ? strip_tags(trim($_POST['name'])) : 'Valued Client';

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Please provide a valid email address.";
        exit;
    }

    // --- Email 1: To Admin (Blueidealteck) ---
    $admin_subject = "New Free Audit Request";
    $admin_content = "You have received a new Free Audit request.\n\n";
    $admin_content .= "Client Email: $email\n";
    $admin_content .= "Timestamp: " . date("Y-m-d H:i:s");

    $admin_headers = "From: $email\r\n";
    $admin_headers .= "Reply-To: $email\r\n";

    // Send to Admin
    mail($receiving_email_address, $admin_subject, $admin_content, $admin_headers);

    // --- Email 2: Auto-Reply to User ---
    $user_subject = "Thank you for reaching out to Blueidealteck!";

    // Exact content as requested
    $user_content = "Hi,\n\n";
    $user_content .= "Thank you for contacting Blueidealteck Software Solutions Private Limited. We are excited to learn more about your business and explore how our team can support your goals.\n\n";
    $user_content .= "To provide you with the most accurate solution and assign the right subject matter experts from our team, we would love to hear more about your specific needs.\n\n";
    $user_content .= "Could you please share a brief overview of what you are looking for? For example:\n\n";
    $user_content .= "What is the primary challenge you are looking to solve right now?\n\n";
    $user_content .= "Which service area are you most interested in? (Custom Software, Cloud/DevOps, UI/UX, AI, or IT Staffing)\n\n";
    $user_content .= "Are there any specific technical requirements or deadlines we should be aware of?\n\n";
    $user_content .= "Once we have these details, our experts—specializing in scalable digital ecosystems and cloud optimization—will review them and get back to you within 4 business hours with a tailored plan.\n\n";
    $user_content .= "We look forward to hearing from you and building something great together.\n\n";
    $user_content .= "Best Regards,\n";
    $user_content .= "The Blueidealteck Team\n";
    $user_content .= "www.blueidealteck.com\n";

    $user_headers = "From: $receiving_email_address\r\n";
    $user_headers .= "Reply-To: $receiving_email_address\r\n";
    $user_headers .= "X-Mailer: PHP/" . phpversion();

    // Send Auto-Reply
    if (mail($email, $user_subject, $user_content, $user_headers)) {
        http_response_code(200);
        echo "OK";
    } else {
        http_response_code(500);
        echo "Oops! Something went wrong and we couldn't send your message.";
    }

} else {
    http_response_code(403);
    echo "There was a problem with your submission, please try again.";
}
?>