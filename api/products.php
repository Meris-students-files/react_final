<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();
include 'fileUpload.php';
$method = $_SERVER['REQUEST_METHOD'];
$user_id = $_SESSION['user_id'];
switch ($method) {
    case "GET":
        $sql = "SELECT * FROM products";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if (isset($path[3]) && is_numeric($path[3])) {
            $sql .= " WHERE id = :id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $path[3]);
            // $stmt->bindParam(':user_id', $user_id);
            $stmt->execute();
            $products = $stmt->fetch(PDO::FETCH_ASSOC);
        } else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $products = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }

        echo json_encode($products);
        break;
    case "POST":
        $image = fileUpload();
        $sql = "INSERT INTO products(title, user_id, descripiton, quantity,image,category_id,price) VALUES(:title, :user_id, :descripiton, :quantity,:image,:category_id,:price)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':title', $_POST['title']);
        $stmt->bindParam(':descripiton', $_POST['descripiton']);
        $stmt->bindParam(':quantity', $_POST['quantity']);
        $stmt->bindParam(':image', $_POST['image']);
        $stmt->bindParam(':category_id', $_POST['category_id']);
        $stmt->bindParam(':price', $_POST['price']);
        $stmt->bindParam(':created_at', $created_at);
        $stmt->bindParam(':user_id', $user_id);
        $stmt->bindParam(':image', $image);
        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record created successfully.'];
        } else {
            $response = ['status' => 0, 'message' => $sql->error];
        }
        echo json_encode($response);
        break;

    case "PUT":
        $image = fileUpload();
        $user = json_decode(file_get_contents('php://input'));
        $sql = "UPDATE products SET title= :title, descripiton =:descripiton, quantity =:quantity, image =:image, category_id=:category_id,price=:price WHERE id = :id AND user_id=:user_id";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':title', $_POST['title']);
        $stmt->bindParam(':descripiton', $_POST['descripiton']);
        $stmt->bindParam(':quantity', $_POST['quantity']);
        $stmt->bindParam(':image', $_POST['image']);
        $stmt->bindParam(':category_id', $_POST['category_id']);
        $stmt->bindParam(':price', $_POST['price']);
        $stmt->bindParam(':created_at', $created_at);
        $stmt->bindParam(':user_id', $user_id);
        $stmt->bindParam(':image', $image);
        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record created successfully.'];
        } else {
            $response = ['status' => 0, 'message' => $sql->error];
        }
        echo json_encode($response);
        break;

    case "DELETE":
        $sql = "DELETE FROM products WHERE id = :id AND user_id=:user_id";
        $path = explode('/', $_SERVER['REQUEST_URI']);

        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':user_id', $user_id);
        $stmt->bindParam(':id', $path[3]);

        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to delete record.'];
        }
        echo json_encode($response);
        break;
}