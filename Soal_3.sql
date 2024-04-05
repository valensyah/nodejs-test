-- query untuk menampilkan semua data customer yang tercatat melakukan
-- transaksi atau pemesanan lebih dari 2 kali per bulanya.

SELECT Y.Nama, COUNT(X.CustomerID) AS Customers_order, DATE_FORMAT(x.OrderDate, '%Y%m') AS FormattedOrderDate 
FROM Orders X
JOIN Customer Y ON Y.ID = X.CustomerID
GROUP BY FormattedOrderDate, X.CustomerID
HAVING Customers_order > 2
;
