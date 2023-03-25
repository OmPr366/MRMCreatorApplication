import React from "react";

const ModelSpec = () => {
  return (
    <div className="pdfBox">
      <div className="text-s font-bold text-blue-500 m-2">
        Model Specifications
      </div>
      <div className="text-s font-bold text-blue-400 m-2">Model Objective:</div>
      <div className="text-xs mx-4 my-1">
        The objective of the CLD model is to predict the probability of default
        of an account in next 18 months. These score will be used to identify
        high risk accounts within the eligible population to allow the bank to
        decrease the credit limit of the customers before they use up their
        remaining credit line and become delinquent and eventually charge-off.
        Conventionally, CLD program has been leveraging portfolio level behavior
        risk score, FICO score along with a set of rule based criteria to
        identify high risk customers. However, machine learning technique
        captures non-linear complex relationships more effectively as compared
        to simple linear techniques like logistic regression. The score is
        computed at an account level and developed using XGBoost (Extreme
        Gradient Boosting) technique leveraging all the different type of data.
      </div>
      <div className="text-xs mx-4 my-1">
        The model output will be used by the policy team along with other rules
        to screen the high risk customers to decrease their credit limits to the
        current balances.
      </div>
      <div className="text-s font-bold text-blue-500 m-2">
        Model Methodology{" "}
      </div>
      <div className="text-xs mx-4 my-1">
        XGBoost and Logistic Regression are two techniques used for creating the
        model along with GBM trees. The final model is built using XGBoost and
        this is determined based on the performance benefits observed in using
        XGBoost. It is observed that XGBoost outperforms both the other models
        on all the important business metrics and does so consistently across a
        wide range of data points
      </div>
      <div className="text-xs mx-4 my-1">
        Extreme Gradient Boosting Machines (XGBoost) has been used for model
        development. XGBoost is a widely used technique for both Classification
        and Regression outcomes. It is a stage-wise additive modelling
        technique, which improves upon predictions by building decision trees on
        residuals remaining at any stage. For a classification outcome, XGBoost
        is built based on a Bernoulli distribution and optimizes for a log loss
        function. The residuals in a classification problem are defined by
        gradients of the log loss function. At each stage, XGBoost uses decision
        trees to predict the remaining residuals. An extensive hyper-parameter
        tuning was performed in a Grid search pattern to obtain the optimal set
        of parameters.
      </div>
      <div className="text-xs mx-4 my-1">
        It should be noted that the model does not make use of segmentation
        since XGBoost is an ensemble of decision trees itself and thus is
        capable of finding interactions without the explicit use of
        segmentation.
      </div>
      <div className="text-xs mx-4 my-1">
        XGBoost technique allows for multiple hyper-parameters to control and
        fine-tune the growth of a XGBoost model. An extensive grid search was
        performen on key hyper-parameters and the performance was analyzed. The
        hyper-parameters used in tuning process were:
      </div>
      
    </div>
  );
};

export default ModelSpec;
