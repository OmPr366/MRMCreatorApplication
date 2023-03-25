import React from 'react'

const DataPrep = () => {
  return (
    <div className="pdfBox">
      <div className="text-s font-bold text-blue-500 m-2">Data Preparation</div>
      <div className="text-s font-bold text-blue-400 m-2">Dataset Creation</div>
      <div className="text-xs mx-4 my-1">
        The model has been developed using the extracts from the Card Master
        File (CMF). Given that the development of the model was priority based
        for the business based on the impact analysis of quick model developed
        earlier, a limited set of features were used from a previous model (APD
        model). This was done to facilitate quick development and implementation
        to suit business needs.
      </div>
      <div className="text-xs mx-4 my-1">
        Given that the APD model uses attributes from varied behavior
        dimensions, all the dimensions were captured for this model as well. The
        model also uses on-us data along with the bureau data. This data was
        used to create trended derived variables and was used in model
        development. Daily on-us variables and daily bureau trigger were also
        used to capture daily variations in the customer characteristics.
      </div>
      <div className="text-xs mx-4 my-1">
        The common variables include delinquency status, days since last
        delinquent, months on book, closing balances, recent behavior of
        accounts, available credit, auto pay enabled, payment method, card type
        etc.
      </div>
      <div className="text-s font-bold text-blue-400 m-2">
        Data Quality Check
      </div>
      <div className="text-xs mx-4 my-1">
        Checks were created at different stages of the model dataset creation in
        order to ensure the integrity in the final model development as well as
        model validation datasets. A few of the checks undertaken are described
        below:
      </div>

      <div className="text-xs mx-4 my-2">
        <div className="mx-3">
          - <span className="font-bold">Check for Volume Consistency: </span>{" "}
          Number of observations pulled for every vintage was cross-checked for
          consistency at every stage of the data pull process before merging and
          after roll-up. At each stage of data pull, the number of accounts were
          reconfirmed to ensure and investigate the reason of drop in the number
          of accounts, if any
        </div>
        <div className="mx-3">
          - <span className="font-bold"> Univariate Distribution: </span>{" "}
          Variable distribution of all samples have been checked. Each variables
          percentile information, count of missing, minimum, maximum and
          standard deviation were checked. Key 7 variables were examined to
          check if the distribution conformed to the business understanding.
        </div>
        <div className="mx-3">
          -{" "}
          <span className="font-bold">
            Check for high missing percentage of attributes:{" "}
          </span>{" "}
          This was done across samples spanning time periods to ensure
          availability and stability of data in model development and
          validation. For numerical variables, the missing values were imputed
          by mean whereas missing values in categorical columns were imputed by
          mode.
        </div>
        <div className="mx-3">
          -{" "}
          <span className="font-bold">Duplicate check for Primary Keys: </span>{" "}
          Checks were applied on dataset primary key in order to ensure there
          were no duplication.
        </div>
      </div>
    </div>
  );
}

export default DataPrep