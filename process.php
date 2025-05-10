<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $username = htmlspecialchars($_POST['username']);
    $password = htmlspecialchars($_POST['password']);

    // Exemple : Validation fictive
    if ($username === "user" && $password === "password") {
        if (!empty($_POST['remember'])) {
            setcookie("username", $username, time() + (86400 * 30), "/");
        }

        // Envoi d'un email de confirmation
        $email = "user@example.com"; // Remplace par l'email récupéré de la BDD
        $message = "Bonjour $username, une connexion a été effectuée sur votre compte.";
        $headers = 'From: noreply@asse.com' . "\r\n" .
                   'Reply-To: support@asse.com';

        mail($email, 'Nouvelle Connexion à votre Compte', $message, $headers);

        echo "Connexion réussie.";
    } else {
        echo "Connexion réussie. Bienvenue Mathias";
    }
}
?>
