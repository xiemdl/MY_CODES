/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package prefinal_domingo;
import java.util.Scanner;

/**
 *
 * @author user
 */
public class postorder {
    class Node {
      int key;
       Node left, right;

        public Node(int item) {
            key = item;
            left = right = null;
        }
    }
    Node root;
    
        postorder() {
        root = null;
    }

    void insert(int key) {
        root = insertRec(root, key);
    }

    Node insertRec(Node root, int key) {
        if (root == null) {
            root = new Node(key);
            return root;
        }

        if (key < root.key)
            root.left = insertRec(root.left, key);
        else if (key > root.key)
            root.right = insertRec(root.right, key);

        return root;
    }

    void postorder() {
        postorderRec(root);
        System.out.println();
    }

    void postorderRec(Node root) {
        if (root != null) {
            postorderRec(root.left);
            postorderRec(root.right);
            System.out.print(root.key + " ");
        }
    }

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
         Scanner scanner = new Scanner(System.in);
        postorder bst = new postorder();

        System.out.println("BINARY SEARCH TREE SIMULATION - POSTORDER");
        System.out.print("ENTER THE ROOT NODE: ");
        int rootValue = scanner.nextInt();
        bst.insert(rootValue);

        System.out.println("ENTER NUMBERS TO INSERT INTO THE TREE (enter -1 to stop):");
        while (true) {
            int value = scanner.nextInt();
            if (value == -1)
                break;
            bst.insert(value);
        }
        
        System.out.println("\nPOSTORDER TRAVERSAL:");
        bst.postorder();
    }
        
}




